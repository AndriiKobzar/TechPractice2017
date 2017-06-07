from django.conf.urls import url

from polls.views import categories, competitions, competitors, vote

urlpatterns = [
    url(r'^categories/all', categories.get_categories),
    url(r'^categories/create', categories.create_category),
    url(r'^competitions/create', competitions.create_competition),
    url(r'^competitions/all', competitions.get_competitions),
    url(r'^competitors/all', competitors.get_competitors),
    url(r'^competitors/create', competitors.create_competitor),
    url(r'^votes', vote.get_votes_for_category),
    url(r'vote', vote.vote)
]
