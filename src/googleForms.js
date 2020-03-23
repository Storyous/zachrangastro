"use strict";

const TAKEAWAY = "takeaway";
const DELIVERY = "delivery";
const SUPPLIER = "supplier";
const PERSONNEL = "personnel";
const WAITER = "waiter";

module.exports = {
  types: {
    TAKEAWAY,
    DELIVERY,
    SUPPLIER,
    PERSONNEL,
    WAITER
  },
  links: {
    [TAKEAWAY]:
      "https://docs.google.com/forms/d/1S-YJ2_0GggbSViXZlRf5uF7VV0wgF0ddsJ9O2nnur_k/edit?ts=5e74a8c4",
    [DELIVERY]:
      "https://docs.google.com/forms/d/1b45vWFV_3mPlW07nFoaAH_GQSfzma8u5-ZO_AnDc13c/edit",
    [SUPPLIER]:
      "https://docs.google.com/forms/d/19ezYuPkXIktpI5komA80ddhWtsS9FC6UgAlA3p_3ld0/edit",
    [PERSONNEL]:
      "https://docs.google.com/forms/d/1teuVHxwqqeVuYgOP7IjSbKzzjfLjuKn4ax1ov8PT1Cs/edit",
    [WAITER]:
      "https://docs.google.com/forms/d/12qXlyPsQh4GkvQ98YWWwKwscXehCWZ_CQcfDZf3a5rw/edit"
  }
};
