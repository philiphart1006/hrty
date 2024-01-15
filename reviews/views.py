from .serializers.common import ReviewSerializer
from rest_framework.generics import CreateAPIView, DestroyAPIView
from .models import Review

# Create your views here.

# Path /reviews/
# Methods: GET, POST
class ReviewCreateView(CreateAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer

# Path /reviews/:pk/
# Methods: DELETE
class ReviewDestroyView(DestroyAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer
