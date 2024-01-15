from django.db import models

# Create your models here.
class Review(models.Model):
  quarter = models.PositiveIntegerField()
  year = models.PositiveIntegerField()
  employee = models.ForeignKey(
    to = 'users.User',
    related_name = 'reviews_received',
    on_delete = models.CASCADE
  )
  owner = models.ForeignKey(
    to = 'users.User',
    default = 1,
    related_name = 'reviews_written',
    on_delete = models.CASCADE
  )
  rating = models.PositiveIntegerField()
  summary = models.TextField()