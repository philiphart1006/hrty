from .serializers.common import ReviewSerializer
from .serializers.populated import PopulatedReviewSerializer
from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from .models import Review
from lib.views import OwnerListCreateView

# Create your views here.

# Path /reviews/
# Methods: GET, POST
class ReviewCreateListView(ListCreateAPIView):
  queryset = Review.objects.all()
  # serializer_class = ReviewSerializer

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PopulatedReviewSerializer
    return ReviewSerializer

# Path /reviews/:pk/
# Methods: DELETE
class ReviewDestroyView(DestroyAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer
