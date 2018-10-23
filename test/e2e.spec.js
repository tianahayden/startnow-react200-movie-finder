/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = require('../server/server');

app.listen(8888);

const url = 'http://localhost:8888';
const url2 = 'http://localhost:8888/#/movie/tt0499549'


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare({
      show: true
    });
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Get Movie Information');
      })
  );

  it('returns the correct status code on movie search', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it('returns the correct status code on movie details page', () => axios.get(url2)
    .then(response => expect(response.status === 200)));

  it('should display movie results on movie search page', () =>
    nightmare
      .goto(url)
      .type('#input', 'Avatar')
      .click('#button')
      .wait('#results')
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('Avatar');
      })
  ).timeout(6500);

  it('should have the correct movie title on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#movieTitle')
      .evaluate(() => document.querySelector('#movieTitle').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Avatar');
      })
  );

  it('should have the release year on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#released')
      .evaluate(() => document.querySelector('#released').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('2009');
      })
  ).timeout(6000);

  it('should have the runtime on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#runtime')
      .evaluate(() => document.querySelector('#runtime').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('162');
      })
  ).timeout(6000);

  it('should have the movie rating on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#rated')
      .evaluate(() => document.querySelector('#rated').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('PG-13');
      })
  ).timeout(6000);

  it('should have the movie poster on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#poster')
      .evaluate(() => document.querySelector('#poster').innerText)
      .end()
      .then((text) => {
        expect(text).to.exist;
      })
  ).timeout(6000);

  it('should have the correct page title', () =>
    nightmare
      .goto(url2)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Details');
      })
  );

});
