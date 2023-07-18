const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    tickets: [],
  },
  {
    timestamps: true,
  }
);


/**
 * Methods
 */
ticketSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "tickets", "createdAt"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
ticketSchema.statics = {
  

  /**
   * Get user
   *
   * @param {ObjectId} id - The objectId of user.
   */
  async get(id) {
    let user;

    if (mongoose.Types.ObjectId.isValid(id)) {
      user = await this.findById(id).exec();
    }
    if (user) {
      return user;
    }

    throw new APIError({
      message: "User does not exist",
      status: httpStatus.NOT_FOUND,
    });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   */
  list({ page = 1, perPage = 30 }) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
};

module.exports = mongoose.model("Ticket", ticketSchema);
