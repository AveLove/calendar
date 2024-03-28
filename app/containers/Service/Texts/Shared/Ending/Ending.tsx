import { makeIsEasterOffsetRange, getFeastInfo } from 'domain/getDayInfo';

import React from 'react';
import Parts from 'components/Parts/Parts';

import MdxLoader from '../../MdxLoader';

const Ending = ({ date, saints, annunciation, isFast }) => {
    const isEasterOffsetRange = makeIsEasterOffsetRange(date);
    const easterSeason = isEasterOffsetRange(0, 38);
    const dateObject = new Date(date);
    const isSunday = dateObject.getDay() === 0;

    const { title } = getFeastInfo(dateObject);

    const otpust = (
        <Parts
            date={date}
            partNames={['shared.Отпуст Синаксарный']}
            fallback={
                isSunday || easterSeason ? (
                    <MdxLoader src="Shared/Ending/EasterOtpust" />
                ) : (
                    <MdxLoader src="Shared/Ending/Otpust" />
                )
            }
        />
    );

    if (easterSeason) {
        return <MdxLoader src="Shared/Ending/EasterEnding" otpust={otpust} saints={saints} />;
    }
    return (
        <MdxLoader
            src="Shared/Ending/Ending"
            otpust={otpust}
            saints={saints}
            isEasterOffsetRange={isEasterOffsetRange}
            hidePreotpust={annunciation}
            isEasterOffsetRange={isEasterOffsetRange}
            hideTverdina={isEasterOffsetRange(-7 * 7 + 1, 49) || title === 'Рождество Христово'}
            isFast={isFast}
        />
    );
};
export default Ending;
