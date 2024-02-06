export const getSigns = () => {
    return fetch("http://sandipbgt.com/theastrologer/api/sunsigns")
        .then((response) => response.json());
}

export const getHoroscope = (sign, timeFrame) => {
    return fetch(
        `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeFrame}`).then((response) => response.json()).then(({ horoscope }) => horoscope);

};