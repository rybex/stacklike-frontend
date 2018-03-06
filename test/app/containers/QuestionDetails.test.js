import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router";
import QuestionDetails from "../../../app/containers/QuestionDetails";
import questionsResponse from "../../fixtures/questions";
import meResponse from "../../fixtures/me";

describe("QuestionDetails", () => {
  let store, container;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    questions: {
      list:       questionsResponse,
      cursor:     1,
      searchText: null
    },
    users: meResponse
  }

  describe("With list of questions and user provided", () => {
    beforeEach(() => {
      store = mockStore(initialState);
      fetchMock.getOnce("http://stacklike.com/searches", {
        body: questionsResponse,
        headers: { "content-type": "application/json" }
      });
      fetchMock.getOnce("http://stacklike.com/me", {
        body: meResponse,
        headers: { "content-type": "application/json" }
      });

      container = mount(
        <Provider store={store}>
          <MemoryRouter>
            <QuestionDetails match={{params: {id: questionsResponse[0].id}}}/>
          </MemoryRouter>
        </Provider>
      );
    });

    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it("should render navbar component", () => {
      const navbar = container.find(".navbar");
      const navbarItems = navbar.find(".navbar-item");

      expect(navbarItems.length).toEqual(2);
      expect(navbarItems.at(0).html()).toEqual(
        '<li class="navbar-item"><a class="navbar-link" href="#">Stacklike questions</a></li>'
      );
      expect(navbarItems.at(1).html()).toEqual(
        '<li class="navbar-item" style="float: right;"><img class="avatar" src="https://photo.jpg"><a class="navbar-link" href="http://stacklike.com/signout?redirect_url=http://stacklike-frontend.com">Logout</a></li>'
      );
    });

    it("should render question details", () => {
      const question         = questionsResponse[0];
      const questionContent  = container.find(".question-content");

      const questionTitle    = questionContent.find(".question-content-title");
      const questionSubtitle = questionContent.find(".question-content-subtitle");
      const questionBody     = questionContent.find(".question-content-body");
      const answerButton     = questionContent.find(".question-content-controls button");

      expect(questionTitle.text()).toEqual(question.title);
      expect(questionSubtitle.text()).toEqual(`From ${question.creator_name} at ${question.created_at}`);
      expect(questionBody.text()).toEqual(question.body);
    });

    it("should render answers", () => {
      const answer       = questionsResponse[0].answers[0];
      const answersItems = container.find(".answer-item");

      expect(answersItems.length).toEqual(1);

      expect(answersItems.at(0).text()).toEqual(answer.body);
    });
  });
});
