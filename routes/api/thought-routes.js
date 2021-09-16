const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addUserReaction,
  removeUserReaction,
} = require("../../controllers/thought-controller");

// GET all thoughts at /api/thoughts
router.route("/").get(getAllThought);

// GET single thought at /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThoughtById);

// Set up all POST routes at /api/thoughts/
router.route("/").post(addThought);

// update or delete a thought
router.route("/:thoughtId").put(updateThought).delete(removeThought);

// add user reaction
router.route("/:thoughtId/reactions/").post(addUserReaction);

// delete user reaction
router.route("/:thoughtId/reactions/:userReactionId").delete(removeUserReaction);

module.exports = router;
