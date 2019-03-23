from django.shortcuts import render


def vue_view(request):
    return render(request, 'index.vue', context={
        'title': 'Django VueJS Parcel SSR Example',
        'initialCount': 34
    })
