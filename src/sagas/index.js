import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json(), );
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

function* fetchDog() {
  const json = yield fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json(), )
  yield put({ type: "DOG_RECEIVED", json: json })
}
function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}
function* actionDogWatcher() {
  yield takeLatest('GET_DOG', fetchDog)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(), actionDogWatcher()
  ]);
}
