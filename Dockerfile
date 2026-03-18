FROM ruby:3.2

# Install bundler & Jekyll
RUN gem install bundler
RUN gem install jekyll -v "~>4.4"

WORKDIR /srv/jekyll
