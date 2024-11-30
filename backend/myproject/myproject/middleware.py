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

def api_key_middleware(get_response):
    def middleware(request):
        # Handle OPTIONS request for CORS preflight
        if request.method == "OPTIONS":
            response = HttpResponse(status=204)  # No content
            response["Access-Control-Allow-Origin"] = "*"
            response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            response["Access-Control-Allow-Headers"] = "X-Api-Key, Content-Type"
            return response

        # Check for API key on other requests
        api_key = request.headers.get("X-Api-Key")
        if api_key != "4aa5ff9fd0a040asadsaa9f4f07asdadb88f1959bcca5b0ba25c339db4b9dafacd736beca69":
            return JsonResponse({"error": "Forbidden"}, status=403)

        return get_response(request)

    return middleware
