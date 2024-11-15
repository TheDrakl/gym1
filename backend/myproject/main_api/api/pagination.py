from rest_framework.pagination import PageNumberPagination


class PlansPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = "page_size"
    max_page_size = 3


class ReviewsPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = "page_size"
    max_page_size = 4


class SupplementsPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "page_size"
    max_page_size = 12


class SupplementDynamicPagination(PageNumberPagination):
    def get_page_size(self, request):
        page_size = request.query_params.get("page_size", None)
        if page_size is not None:
            try:
                return int(page_size)
            except ValueError:
                pass
        return 12
