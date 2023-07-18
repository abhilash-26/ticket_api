const Ticket = require("../models/ticket.model");
const { failResponse, sucessResponse } = require("../utils/responseHandler");
const { createTicket } = require("../utils/helperFunction");

exports.create = async (req, res) => {
  try {
    const ticketCount = req.body.ticketCount || 6;
    if( ticketCount>6){
      return failResponse(res, null, 500, "Ticket count should be less than or equal to 6");
    }
    const ticket = createTicket(ticketCount);
    const result = await Ticket.create({
      tickets: ticket,
    });
    let dataTosend = {
      ticket: result.transform(),
    };
    sucessResponse(res, dataTosend, 200, "Ticket created");
  } catch (error) {
    failResponse(res, null, 500, error.message);
  }
};

exports.getList = async (req, res, next) => {
  try {
    let page = req.query.page;
    let perPage = req.query.limit;
    const result = await Ticket.list({ page, perPage });
    let dataTosend = {
      ticket: result,
    };
    sucessResponse(res, dataTosend, 200, "Ticket created");
  } catch (error) {
    failResponse(res, null, 500, error.message);
  }
};
