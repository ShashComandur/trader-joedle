"""
This script is designed to create `games.json`, which is contains the daily game information for Trader Joedle.
It reads from `src/lib/game/merged.json`, which contains the merged results of the API queries executed in `src/lib/game/api.py`.
"""

__author__ = "Shashank Comandur"
__credits__ = ["Trader Joes", "https://www.traderjoes.com", "https://www.traderjoes.com/api/graphql"]
__email__ = "shashank.comandur@gmail.com"
__version__ = "1.0"

import json
import random
import datetime

MERGED_PATH = "src/lib/game/merged.json"
GAMES_PATH = "src/lib/game/games.json"

# function to remove duplicates from merged data
def remove_duplicates(merged_data):
    unique = {}
    for item in merged_data["data"]["products"]["items"]:
        sku = item["sku"]
        if sku not in unique:
            unique[sku] = item
    return {"data": {"products": {"items": list(unique.values())}}}

def shuffle(unique_data):
    items = unique_data["data"]["products"]["items"]
    random.shuffle(items)
    return unique_data

def create_game_data(shuffled_data):
    game_data = []
    game_number = 1
    date = datetime.datetime(2024, 6, 1)

    # pull out attributes for each game 
    for item in shuffled_data["data"]["products"]["items"]:
        img_path = item["primary_image"] + "/jcr:content/renditions/webp-1280.webp" # img path
        name = item["item_title"] # name
        price = item["retail_price"] # price
        amount = item["sales_size"] # amount
        unit = item["sales_uom_description"] # unit
        item_characteristics = item["item_characteristics"] # item characteristics
        
        game_data.append({ 
            "img_path": img_path,
            "name": name,
            "price": price,
            "amount": amount,
            "unit": unit,
            "item_characteristics": item_characteristics,
            "game_number": game_number,
            "date": date.strftime("%B") + " " + date.strftime("%d") + " " + date.strftime("%Y")
        }) # add json to game_data

        game_number = game_number + 1 # increment game number
        date = date + datetime.timedelta(days=1) # increment date

    return game_data

if __name__ == "__main__":
    # load merged.json
    f = open(MERGED_PATH)
    merged = json.load(f)

    # remove any duplicate items
    unique = remove_duplicates(merged)

    # shuffle the unique list
    shuffled = shuffle(unique)

    # create the game data using the shuffled list
    game_data = create_game_data(shuffled)
    
    # save to games.json
    with open(GAMES_PATH, "w", encoding="utf-8") as f:
        json.dump(game_data, f, ensure_ascii=False, indent=4)