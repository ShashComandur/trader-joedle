"""
This script is designed to get all of the product information for Trader Joedle using the Trader Joe's GraphQL API.
There are four product categories for all Trader Joe's items, as described in `categories.json`.
Running this script will output all product information for each category, formatted as JSON files in corresponding folders.

It grabs 100 products at a time - I did not want to cause any trouble by trying to pull more than that at once, as I have no information as to whether it is rate-limited. This is why I play it safe with the repeated queries.
Because this script is really only intended to be run once, I manually merged the resulting JSON files, which can be found in `src/lib/game/merged.json`.
The `src/lib/game/games.json`, which is what determines the daily games, was created from the resulting merged file.

Note that the raw output (the contents of the `food`, `beverage`, `plants`, and `everything-else` folders) has been ignored by git, as these files do not need to exist in the repository,

If you need this script for any reason and have questions, please reach out!
"""

__author__ = "Shashank Comandur"
__credits__ = ["Trader Joes", "https://www.traderjoes.com", "https://www.traderjoes.com/api/graphql"]
__email__ = "shashank.comandur@gmail.com"
__version__ = "1.0"

import requests
import json
import math
import os

# constants used in querying product api
STORE_CODE = 751
AVAILABILITY = 1
PUBLISHED = 1
PAGE_SIZE = 100

# get category info stored in `categories.json`
f = open("src/lib/game/categories.json")
categories = json.load(f)

# function to query the Trader Joes GraphQL API
def query_api(store_code, availability, published, category_name, category_id, current_page, page_size):
    # query is formatted super poorly. apologies to whomever sees this 💔
    url = "https://www.traderjoes.com/api/graphql"
    payload = {
        "operationName":"SearchProducts",
        "variables":{"storeCode":str(store_code),"availability":str(availability),"published":str(published),"categoryId":category_id,"currentPage":current_page,"pageSize":page_size},
        "query":"query SearchProducts($categoryId: String, $currentPage: Int, $pageSize: Int, $storeCode: String = \"751\", $availability: String = \"1\", $published: String = \"1\") {\n  products(\n  filter: {store_code: {eq: $storeCode}, published: {eq: $published}, availability: {match: $availability}, category_id: {eq: $categoryId}}\n  currentPage: $currentPage\n  pageSize: $pageSize\n  ) {\n    items {\n      sku\n      item_title\n      primary_image\n      primary_image_meta {\n        url\n        metadata\n        __typename\n      }\n      sales_size\n      sales_uom_description\n      price_range {\n        minimum_price {\n          final_price {\n            currency\n            value\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      retail_price\n      fun_tags\n      item_characteristics\n      __typename\n    }\n       __typename\n  }\n}\n"
    }

    # make the query
    response = requests.post(url, json=payload)

    # check for successful response
    if response.status_code == 200:
        data = response.json()
        path = f"src/lib/game/api-output/{category_name}/{current_page+1}.json"
        # dump the data
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
    else:
        print(f"Error: Failed to execute query. Status code: {response.status_code}")
        print(response.text)

if __name__ == "__main__":
    for category in categories:
        current_name = category["name"]
        current_id = category["id"]
        current_number_items = category["number_items"]
        number_queries = math.ceil(current_number_items / PAGE_SIZE)        # number of queries needed to grab all items -- divide by query size and round up
        
        # run the queries
        for i in range(number_queries):
            query_api(STORE_CODE, AVAILABILITY, PUBLISHED, current_name, current_id, i, PAGE_SIZE)