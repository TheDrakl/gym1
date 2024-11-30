from django.conf import settings
from django.http import JsonResponse

class APIKeyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Get the API key from request headers
        api_key = request.headers.get('X-API-KEY')
        
        # Check if the API key matches the one stored in settings
        if api_key != settings.SECRET_API_KEY:
            return JsonResponse({'error': 'Invalid API Key'}, status=403)
        
        # Continue processing the request if the API key is valid
        response = self.get_response(request)
        return response