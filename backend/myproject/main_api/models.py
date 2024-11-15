from django.db import models
from io import BytesIO
import os
from PIL import Image
from django.core.files.base import ContentFile
from django.db.models.signals import post_delete
from django.dispatch import receiver


class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to="categories/", blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ["name"]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.pk:
            super().save(*args, **kwargs)

        if self.image:
            image_path = self.image.path

            with Image.open(image_path) as img:
                img = img.convert("RGB")
                webp_io = BytesIO()
                img.save(webp_io, format="WEBP", quality=80)

                webp_file_name = f"category_{self.id}.webp"

                self.image.save(
                    webp_file_name, ContentFile(webp_io.getvalue()), save=False
                )

                webp_io.close()

                if os.path.exists(image_path):
                    os.remove(image_path)

        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.image:
            self.image.delete(save=False)
        super(Category, self).delete(*args, **kwargs)


class Flavour(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name


class Size(models.Model):
    name = models.CharField(max_length=30, default="1kg")

    def __str__(self):
        return self.name


class Supplement(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="supplements"
    )
    flavour = models.ManyToManyField(Flavour, related_name="flavour_supplements")
    size = models.ManyToManyField(Size, related_name="size_supplements")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=False)
    image = models.ImageField(upload_to="supplements/")
    stock = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

    def save(self, *args, **kwargs):
        if not self.pk:
            super().save(*args, **kwargs)

        self.is_active = self.stock > 0

        if self.image:
            image_path = self.image.path

            with Image.open(image_path) as img:
                img = img.convert("RGB")
                webp_io = BytesIO()
                img.save(webp_io, format="WEBP", quality=80)

                webp_file_name = f"supplement_{self.id}.webp"

                self.image.save(
                    webp_file_name, ContentFile(webp_io.getvalue()), save=False
                )

                webp_io.close()

                if os.path.exists(image_path):
                    os.remove(image_path)

        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.image:
            self.image.delete(save=False)
        super(Supplement, self).delete(*args, **kwargs)


class Gym(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=15, blank=True)
    email = models.EmailField(blank=True)
    website = models.URLField(blank=True)
    opening_hours = models.CharField(max_length=100, blank=True)
    images = models.ImageField(upload_to="gyms/", blank=True)
    rating = models.FloatField(default=0.0)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Feature(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Plan(models.Model):
    title = models.CharField(max_length=15)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    features = models.ManyToManyField(Feature, related_name="plans")

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.title


class Review(models.Model):
    written_by = models.CharField(max_length=15)
    description = models.TextField()
    stars = models.DecimalField(max_digits=2, decimal_places=1)
    image = models.ImageField(upload_to="reviews/")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-stars"]

    def __str__(self):
        return f"{self.written_by} - {self.stars}"

    def save(self, *args, **kwargs):
        if not self.pk:
            super().save(*args, **kwargs)

        if self.image:
            image_path = self.image.path

            with Image.open(image_path) as img:
                img = img.convert("RGB")
                webp_io = BytesIO()
                img.save(webp_io, format="WEBP", quality=80)

                webp_file_name = f"review_{self.id}.webp"

                self.image.save(
                    webp_file_name, ContentFile(webp_io.getvalue()), save=False
                )

                webp_io.close()

                if os.path.exists(image_path):
                    os.remove(image_path)

        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.image:
            self.image.delete(save=False)
        super(Review, self).delete(*args, **kwargs)


@receiver(post_delete)
def delete_image_on_model_delete(sender, instance, **kwargs):
    if hasattr(instance, "image") and instance.image:
        instance.image.delete(save=False)
