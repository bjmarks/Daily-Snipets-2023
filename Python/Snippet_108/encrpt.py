# encrypt string using hmac
import hmac
import hashlib
message = "the quick brown fox jumps over the lazy dog"
secret_key = "password123"
dig = hmac.new(secret_key.encode(), msg=message.encode(), digestmod=hashlib.sha256)
encoded_message = dig.hexdigest()
print(encoded_message)