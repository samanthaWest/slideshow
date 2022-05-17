import { initServer } from '../service.js';
import supertest from 'supertest';

// Test 200 Response
test("GET /:types", async () => {
    var app = initServer();
    var types = ['CAT', 'SHARK'];

	await supertest(app)
		.get("/" + types)
		.expect(200);
});

// Test 400 Response(s)
test("GET /:types", async () => {
  var app = initServer();
  var types = ['cat'];

await supertest(app)
  .get("/" + types)
  .expect(400);
});

// 400 - Schema Validation (characters other then alpha)
test("GET /:types", async () => {
  var app = initServer();
  var types = ['cat*3452'];

await supertest(app)
  .get("/" + types)
  .expect(400);
});

// 400 - Schema Validation (upper case alpha)
test("GET /:types", async () => {
  var app = initServer();
  var types = ['CAT','shark'];

await supertest(app)
  .get("/" + types)
  .expect(400);
});

// 400 - Schema Validation (empty query params)
test("GET /:types", async () => {
  var app = initServer();
  var types = [];

await supertest(app)
  .get("/" + types)
  .expect(404);
});

