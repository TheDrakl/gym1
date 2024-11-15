from rest_framework.throttling import UserRateThrottle


class EmailThrottle(UserRateThrottle):
    rate = '10/h'
