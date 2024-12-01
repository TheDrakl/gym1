from django.contrib import admin
from .models import Supplement, Category, Gym, Feature, Plan, Review, Flavour, Size


class SupplementAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "price",
        "stock",
        "is_active",
        "flavour_list",
        "size_list",
    )

    # Display the related flavours and sizes as comma-separated lists
    def flavour_list(self, obj):
        return ", ".join([flavour.name for flavour in obj.flavour.all()])

    flavour_list.short_description = "Flavours"

    def size_list(self, obj):
        return ", ".join([size.name for size in obj.size.all()])

    size_list.short_description = "Sizes"


admin.site.register(Supplement, SupplementAdmin)
admin.site.register(Category)
admin.site.register(Gym)
admin.site.register(Feature)
admin.site.register(Plan)
admin.site.register(Review)
admin.site.register(Flavour)
admin.site.register(Size)
