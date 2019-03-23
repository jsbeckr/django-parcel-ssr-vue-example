# What is this?
Example project for Django + VueJS + SSR. 

I was searching for some kind of better integration between VueJS and Django. **Ruby** as webpacker, which seems to work fine. 

**Django** has something similar, but the project seems to be abandoned: [django-webpack-loader](https://github.com/owais/django-webpack-loader) 😞 

But there seems to be a rising star at the horizon: [django-parcel-ssr](https://github.com/malj/django-parcel-ssr). Which uses [Parcel](https://parceljs.org/) and worked quite smoothly (after getting it up and running). I thought it might be nice to have a bit of an example of how to set it up with **VueJS**. 

# Requirements
* [Pipenv](https://pipenv.readthedocs.io/en/latest/)
* [Node](https://nodejs.org/en/)

# How to get it running?

* Install Django deps
  * `pipenv install` in root directory
* Install Node deps
  * `npm install` in root directory
* Run initial migrations
  * `pipenv run manage.py migrate`
* Run dev server
  * `pipenv run manage.py runserver`

More infos here: [django-parcel-ssr](https://github.com/malj/django-parcel-ssr)