export function callSearch(searchText) {
  return get(`/searches?text=${searchText}`);
}

export function callFetchBatch(cursor, searchText) {
  return get(`/searches?cursor=${cursor}${searchText ? `&text=${searchText}`: ''}`);
}

export function callFetchQuestions() {
  return get(`/searches`);
}

export function callSessionMe() {
  return get('/me');
}

export function callCreateQuestion(questionPayload) {
  const command_name = 'AskQuestion'
  const payload = {
    id:     questionPayload.id,
    title:  questionPayload.title,
    body:   questionPayload.body
  }
  return post(command_name, payload)
}

export function callCreateAnswer(answerPayload) {
  const command_name = 'AnswerQuestion'
  const payload = {
    id:           answerPayload.id,
    question_id:  answerPayload.question_id,
    body:         answerPayload.body
  }
  return post(command_name, payload)
}

async function get(endpoint) {
  return await fetch(API_URL + endpoint, {
    method: 'GET',
    headers: {
     'Accept':       'application/json',
     'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  .then( response => Promise.all([response, response.json()]));
}

async function post(commandName, payload) {
  return await fetch(API_URL + '/commands', {
    method: 'POST',
    headers: {
     'Accept':       'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      command_name: commandName,
      payload:      payload
    }),
    credentials: 'include'
  })
  .then( response => Promise.all([response, response.json()]));
}
