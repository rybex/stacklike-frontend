import React             from 'react';
import { Provider }      from 'react-redux';
import { mount }         from 'enzyme';
import thunk             from 'redux-thunk';
import fetchMock         from 'fetch-mock';
import configureStore    from 'redux-mock-store';
import { MemoryRouter }  from 'react-router';
import QuestionsList     from '../../../app/containers/QuestionsList';
import questionsResponse from "../../fixtures/questions";
import meResponse        from "../../fixtures/me";

describe('QuestionsList', () => {
  let store, container;
  const middlewares       = [thunk]
  const mockStore         = configureStore(middlewares);
  const initialState = {
    questions: {
      list:       questionsResponse,
      cursor:     0,
      searchText: null
    },
    users: meResponse
  }

  describe('Empy list of questions and user', () => {
    beforeEach(()=>{
        store = mockStore({questions: {list: [], cursor: 0, searchText: null}, users: null})
        fetchMock.getOnce('http://stacklike.com/searches', { body: [], headers: { 'content-type': 'application/json' } })
        fetchMock.getOnce('http://stacklike.com/me', { body: null, headers: { 'content-type': 'application/json' } })

        container = mount(
          <Provider store={store}>
            <MemoryRouter>
              <QuestionsList/>
            </MemoryRouter>
          </Provider>
        );
    })

    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it('should render navbar component', () => {
      const navbar      = container.find('.navbar');
      const navbarItems = navbar.find('.navbar-item');

      expect(navbarItems.length).toEqual(2);
      expect(navbarItems.at(0).html()).toEqual(
        '<li class="navbar-item"><a class="navbar-link" href="#">Stacklike questions</a></li>'
      )
      expect(navbarItems.at(1).html()).toEqual(
        '<li class="navbar-item" style="float: right;"><a class="navbar-link" href="http://stacklike.com/auth/google_oauth2?redirect_url=http://stacklike-frontend.com">Login</a></li>'
      )
    });

    it('should render search bar', () => {
      const searchInput = container.find('.search');

      expect(searchInput.length).toEqual(1);
      expect(searchInput.type()).toEqual('input');
      expect(searchInput.text()).toEqual('');
    });

    it('should not render new question button if user not logged in', () => {
      const askQuestionButton = container.find('.ask-question');

      expect(askQuestionButton.length).toEqual(0);
    });

    it('should not render questions list', () => {
      const questions = container.find('.question-item');

      expect(questions.length).toEqual(0);
    });
  });

  describe('With list of questions and user provided', () => {
    beforeEach(()=>{
        store = mockStore(initialState)
        fetchMock.getOnce('http://stacklike.com/searches', { body: [], headers: { 'content-type': 'application/json' } })
        fetchMock.getOnce('http://stacklike.com/me', { body: null, headers: { 'content-type': 'application/json' } })

        container = mount(
          <Provider store={store}>
            <MemoryRouter>
              <QuestionsList/>
            </MemoryRouter>
          </Provider>
        );
    })

    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it('should render navbar component', () => {
      const navbar      = container.find('.navbar');
      const navbarItems = navbar.find('.navbar-item');

      expect(navbarItems.length).toEqual(2);
      expect(navbarItems.at(0).html()).toEqual(
        '<li class="navbar-item"><a class="navbar-link" href="#">Stacklike questions</a></li>'
      )
      expect(navbarItems.at(1).html()).toEqual(
        '<li class="navbar-item" style="float: right;"><img class="avatar" src="https://photo.jpg"><a class="navbar-link" href="http://stacklike.com/signout?redirect_url=http://stacklike-frontend.com">Logout</a></li>'
      )
    });

    it('should render search bar', () => {
      const searchInput = container.find('.search');

      expect(searchInput.length).toEqual(1);
      expect(searchInput.type()).toEqual('input');
      expect(searchInput.text()).toEqual('');
    });

    it('should render new question button if user is logged in', () => {
      const askQuestionButton = container.find('.ask-question');

      expect(askQuestionButton.length).toEqual(1);
    });

    it('should render questions list', () => {
      const questions = container.find('.question-item');

      expect(questions.length).toEqual(1);
    });

    it('should be able create new question', () => {
      fetchMock.postOnce('http://stacklike.com/commands', { body: null, headers: { 'content-type': 'application/json' } })
      const askQuestionButton = container.find('.ask-question');
      var form                = container.find('form');

      expect(form.length).toEqual(0);

      askQuestionButton.simulate('click');
      form = container.find('form');

      expect(form.length).toEqual(1);

      form.simulate('submit', {
        target: {
          body: { value: 'Test body' },
          title: { value: 'Test title' }
        }
      });
    });
  });
});
