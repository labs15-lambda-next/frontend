import {
  FETCH_PROBLEMS_START,
  FETCH_PROBLEMS_SUCCESS,
  FETCH_PROBLEMS_FAIL,
  ADD_PROBLEM_START,
  ADD_PROBLEM_SUCCESS,
  ADD_PROBLEM_FAIL,
  FETCH_POPULAR_START,
  FETCH_POPULAR_SUCCESS,
  FETCH_POPULAR_FAIL,
  FETCH_PROBLEM_START,
  FETCH_PROBLEM_SUCCESS,
  FETCH_PROBLEM_FAIL,
  UPDATE_PROBLEM_START,
  UPDATE_PROBLEM_SUCCESS,
  UPDATE_PROBLEM_FAIL,
  FETCH_ADMIN_PROBLEM_START,
  FETCH_ADMIN_PROBLEM_SUCCESS,
  FETCH_ADMIN_PROBLEM_FAIL,
  UPDATE_ADMIN_PROBLEM_START,
  UPDATE_ADMIN_PROBLEM_SUCCESS,
  UPDATE_ADMIN_PROBLEM_FAIL,
  DELETE_ADMIN_PROBLEM_START,
  DELETE_ADMIN_PROBLEM_SUCCESS,
  DELETE_ADMIN_PROBLEM_FAIL
} from "../actions";

const initialState = {
  problems: [],
  problem: {},
  popular: [],
  newlyAddedProblem: {},
  error: false,
  fetchingProblems: false,
  fetchingProblem: false,
  fetchingPopular: false,
  addingNewProblem: false,
  deletingProblem: false
};

const problems = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROBLEMS_START:
      return {
        ...state,
        error: "",
        fetchingProblems: true
      };

    case FETCH_PROBLEMS_SUCCESS:
      return {
        ...state,
        problems: action.payload,
        error: "",
        fetchingProblems: false
      };

    case FETCH_PROBLEMS_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingProblems: false
      };

    case ADD_PROBLEM_START:
      return {
        ...state,
        error: "",
        addingNewProblem: true
      };

    case ADD_PROBLEM_SUCCESS:
      return {
        ...state,
        newlyAddedProblem: action.payload,
        error: "",
        addingNewProblem: false
      };

    case ADD_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        addingNewProblem: false
      };

    case FETCH_PROBLEM_START:
      return {
        ...state,
        error: "",
        fetchingProblem: true
      };

    case FETCH_PROBLEM_SUCCESS:
      return {
        ...state,
        problem: action.payload,
        error: "",
        fetchingProblem: false
      };

    case FETCH_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingProblem: false
      };

    case FETCH_POPULAR_START:
      return {
        ...state,
        error: "",
        fetchingPopular: true
      };

    case FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        popular: action.payload,
        error: "",
        fetchingPopular: false
      };

    case FETCH_POPULAR_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingPopular: false
      };

    case UPDATE_PROBLEM_START:
      return {
        ...state,
        error: "",
        fetchingProblem: true
      };

    case UPDATE_PROBLEM_SUCCESS:
      return {
        ...state,
        problem: action.payload,
        error: "",
        fetchingProblem: false
      };

    case UPDATE_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingProblem: false
      };
    case FETCH_ADMIN_PROBLEM_START:
      return {
        ...state,
        error: "",
        fetchingAdminProblems: true
      };

    case FETCH_ADMIN_PROBLEM_SUCCESS:
      return {
        ...state,
        problems: action.payload,
        error: "",
        fetchingAdminProblems: false
      };

    case FETCH_ADMIN_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingAdminProblems: false
      };

    case UPDATE_ADMIN_PROBLEM_START:
      return {
        ...state,
        error: "",
        updatingProblem: true
      };

    case UPDATE_ADMIN_PROBLEM_SUCCESS:
      return {
        ...state,
        message: action.payload,
        error: "",
        updatingProblem: false
      };

    case UPDATE_ADMIN_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        updatingProblem: false
      };
    case DELETE_ADMIN_PROBLEM_START:
      return {
        ...state,
        deletingProblem: true,
        error: ""
      };

    case DELETE_ADMIN_PROBLEM_SUCCESS:
      return {
        ...state,
        problems: action.payload,
        deletingProblem: false
      };
    case DELETE_ADMIN_PROBLEM_FAIL:
      return {
        ...state,
        deletingProblem: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default problems;
