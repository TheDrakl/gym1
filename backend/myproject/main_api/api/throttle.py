from rest_framework.throttling import UserRateThrottle


# 10 emails can be sent to one user per hour
class EmailThrottle(UserRateThrottle):
    rate = '10/h'
