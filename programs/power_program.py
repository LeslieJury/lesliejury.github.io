import json

# Ask the user for the JSON file name
file = input("Please enter the file name: ")
file_name = ("130.13." + file + ".json")
print(file_name)


# Load the JSON file
with open(file_name, 'r') as file:

    arr = json.load(file)
    array = arr["array"]

    print("Before sorting: ", array)
    n = len(array)

sub_size_input = input("Enter the sub-array size: ")
sub_size = int(sub_size_input)

best_sub = array[0:sub_size]

for i in range(1, len(array) - sub_size + 1):
    current_sub = array[i:i+sub_size]
    if sum(current_sub) > sum(best_sub):
        best_sub = current_sub

average = sum(best_sub) / sub_size

print(f"Maximum average with a subarray length of {sub_size}: {average:.2f}")
print("Best:", best_sub)
