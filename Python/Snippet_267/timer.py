import time
def time_it(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Execution Time: {end_time - start_time}")
        return result
    return wrapper
@time_it
def my_function():
    time.sleep(2)
    print("done")
my_function()