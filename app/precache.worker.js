const getDaysArray = (start, end) => {
    const arr = [];
    for (const dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt).toISOString().slice(0, 10));
    }
    return arr;
};
const precache = () => {
    const tillDate = new Date();
    tillDate.setDate(tillDate.getDate() + 7);

    const daylist = getDaysArray(new Date(), tillDate);

    caches.open(`workbox-runtime-${process.env.PUBLIC_URL}/`).then(cache => {
        daylist.forEach(date => {
            cache.match(`/api/day/${date}`).then(exists => {
                // If not in cache
                if (!exists) {
                    fetch(`/api/day/${date}`);
                    fetch(`/api/external-day/${date}`);
                    fetch(`/api/readings/${date}`);
                }
            });
        });
    });

    setTimeout(() => {
        precache();
    }, 3600 * 24 * 1000);
};

onmessage = () => {
    precache();
};