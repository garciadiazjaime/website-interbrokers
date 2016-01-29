export default class Utils {

  static setCategoryItems(data, categoryUrl) {
    const response = [];
    data.map((item) => {
      if (item.href === categoryUrl) {
        response.push.apply(response, item.children);
      }
    });
    return response;
  }
}
