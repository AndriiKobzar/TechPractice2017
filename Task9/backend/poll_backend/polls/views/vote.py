import json

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from polls.models import Vote, Category, User, Competition, Competitor
from django.db.models import Count


# {categoryId:<id>, competitorId:<compId>}
@csrf_exempt
def vote(request):
    user = User(vkId="qwe")
    user.save()
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    category = Category.objects.get(pk=body['categoryId'])
    competitor = Competitor.objects.get(pk=body['competitorId'])
    vote = Vote()
    vote.category = category
    vote.competitor = competitor
    vote.voter = User.objects.get(pk=2)
    vote.save()
    return HttpResponse("{result:'ok'}", content_type="application/json")


def get_votes_for_category(request):
    categoryId = int(request.GET.get('categoryId', -1))
    category = Category.objects.get(pk=categoryId)
    votes = Vote.objects.all().filter(category=category)
    votes_map = votes.annotate(votes=Count('voter'))

    return HttpResponse(serializers.serialize('json', votes_map), content_type="application/json")


def map_votes(votes):
    return votes.objects.annotate()
