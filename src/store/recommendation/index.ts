const LOAD_RECOMMENDATION = 'recommendation/loadRecommendation';

export const loadRecommendation = (recommendation) => ({
  type: LOAD_RECOMMENDATION,
  payload: recommendation,
});

const INITIAL_STATE = {
  recommendation: {},
};

export default function recommendationReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  if (type === LOAD_RECOMMENDATION) {
    return {
      ...state.recommendation,
      ...payload,
    };
  }

  return state;
}
