import { request } from "../BaseAPI";

export const getReviews = async () => {
  return request("/admin/get_reviews")
    .then((v) => v.json())
    .catch((e) => {
      console.log(e);
    });
};

export const getPendingProducts = async () => {
  return request("/admin/get_products/pending")
    .then((v) => v.json())
    .catch((e) => {
      console.log(e);
    });
};

export const addHelp = async (data) => {
  return request("/admin/add_help", {
    method: "post",
    body: JSON.stringify(data),
  })
    .then((v) => {
      if (v.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
export const confirmProduct = async (id) => {
  return request(`/admin/confirm_product/${id}`, {
    method: "put",
  })
    .then((v) => {
      if (v.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
export const rejectProduct = async (id) => {
  return request(`/admin/reject_product/${id}`, {
    method: "put",
  })
    .then((v) => {
      if (v.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
