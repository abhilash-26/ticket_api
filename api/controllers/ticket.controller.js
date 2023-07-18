const { failResponse } = require("../utils/responseHandler");
const ticketService = require("../services/ticket.service");

/**
 * Create new ticket
 */

exports.create = async (req, res, next) => {
  try {
    await ticketService.create(req, res, next);
  } catch (error) {
    failResponse(res, null, 500, error);
  }
};

/**
 * get ticket list
 */

exports.getTicketList = async (req, res, next) => {
  try {
    await ticketService.getList(req, res, next);
  } catch (error) {
    failResponse(res, null, 500, error);
  }
};
