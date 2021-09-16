const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  addUserReaction,
  removeUserReaction,
} = require("../../controllers/thought-controller");

// GET all thoughts at /api/thoughts
router.route("/").get(getAllThought);

// GET single thought at /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThoughtById);

// Set up all POST routes at /api/thoughts/:userId
router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").put(addUserReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:userReactionId").delete(removeUserReaction);

module.exports = router;
