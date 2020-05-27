const db = require('/data/db-config');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
};

function find() {
	return db('schmemes');
}

function findById() {
	return db('schemes').where({ id });
}

function findSteps() {
	return db('schemes')
		.join('steps.id', 'steps.instructions', 'steps.step_number', 'steps.scheme_name')
		.where('steps.id', id);
}

function add() {
	return db('schemes').insert(scheme).then(([ id ]) => {
		return findById(id);
	});
}

function update(scheme) {
	return db('schemes').where({ id }).update(changes).then(() => {
		return findById();
	});
}

function remove(id) {
	return findById(id).then((deleted) => {
		return db('schemes').where({ id }).del().then(() => {
			return deleted;
		});
	});
}
