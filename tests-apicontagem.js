import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  duration: '10s',
  vus: 30,
};

export default function () {
  let res = http.get('http://localhost:5000/contador');
  check(res, { 'status 200 OK': (r) => r.status === 200 });
  sleep(1);
}