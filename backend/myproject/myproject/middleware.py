from django.conf import settings
from django.http import JsonResponse

# class APIKeyMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         # Get the API key from request headers
#         api_key = request.headers.get('X-Api-Key')
        
#         # Check if the API key matches the one stored in settings
#         if api_key != settings.SECRET_API_KEY:
#             return JsonResponse({'error': 'Invalid API Key'}, status=403)
        
#         # Continue processing the request if the API key is valid
#         response = self.get_response(request)
#         return response
from django.conf import settings
from django.http import JsonResponse

def api_key_middleware(get_response):
    def middleware(request):
        if request.method == "OPTIONS":
            # Allow preflight requests
            response = JsonResponse({"message": "CORS preflight allowed"}, status=200)
            response["Access-Control-Allow-Origin"] = "*"
            response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            response["Access-Control-Allow-Headers"] = "X-Api-Key, Content-Type"
            return response

        # Skip the API key check for non-API routes (like media files)
        if request.path.startswith(settings.MEDIA_URL):
            return get_response(request)

        api_key = request.headers.get("X-Api-Key")
        if api_key != settings.SECRET_API_KEY:
            return JsonResponse({"error": "Forbidden"}, status=403)

        return get_response(request)

    return middleware

