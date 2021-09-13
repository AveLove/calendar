import React from 'react';
import Parts from 'components/Parts/Parts';
import MdxLoader from 'containers/Service/Texts/MdxLoader';

export const SundayTroparions = ({ day, date }) => {
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay();
    const glas = day?.glas;
    if (dayOfWeek === 0) {
        if (!glas) {
            return null;
        }
        return <MdxLoader src={`Shared/Troparions/Glas${glas}`} />;
    }
    return null;
};

const Troparions = ({ day, date, serviceType }) => (
    <Parts
        date={date}
        partNames={['shared.Тропари']}
        alwaysShowFallback
        fallback={<SundayTroparions day={day} date={date} />}
        serviceType={serviceType}
    />
);

export default Troparions;
