import React from 'react';
import Tooltip from 'components/Tooltip/Tooltip';

const Trisvatoe = ({ day, lang }) => {
    const vmestoTrisvatogo = day?.liturgyParts?.['Вместо Трисвятого'];
    return (
        <>
            <p id="trisvatoe" className="_-ОСНОВНОЙ_Имя-части-отст5 ParaOverride-2">
                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">
                    Молитва перед пением <br />
                </span>
                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">
                    Трисвятой песни
                    <Tooltip>Если Трисвятое не поётся, то даётся только возглас.</Tooltip>
                </span>
            </p>
            {lang === 'default' && (
                <>
                    <p className="_-ОСНОВНОЙ_Основной-отст1-5 ParaOverride-5">
                        <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> </span>
                        <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">П</span>
                        {!vmestoTrisvatogo && (
                            <>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    {' '}
                                    Боже святой и во святыне пребывающий, Тебя Три­святой песнью серафимы воспевают и
                                    херувимы славословят, Тебе все небесные силы поклоняются! Ты
                                </span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> из небытия</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> в бытие</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    {' '}
                                    всё привёл, Ты сотворил человека по Своему образу и подобию и всеми Твоими да­ра
                                </span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">ми его наделил; Ты и прося</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    щему по­даёшь премудрость и разум, и согрешающего не презираешь, ибо установи
                                </span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    л ему во спасение покаяние. Ты удостоил нас, убогих и недостойных слуг Твоих, и в
                                    этот час стать пред лицом славы Твоего святого жертвенника и должное поклонение и
                                    славословие Тебе приносить, – Ты
                                </span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> же, Владыка, прими</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> и от уст нас, грешных, Трисвяту</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    ю песнь и посети нас Своей благостью; прости нам все вольные и невольные согрешения,
                                    освяти
                                </span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    {' '}
                                    наши души и тела и дай нам праведно служить Тебе во все дни жизни на­шей, по хода
                                </span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    ­тайству святой Богородицы и всех святых, во все века творивших угодное Тебе, –
                                </span>
                            </>
                        )}
                    </p>
                    <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                        <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                            ибо Ты свят, Боже наш, и мы воссылаем славу Тебе, Отцу и Сыну и Святому Духу, ныне и всегда
                        </span>
                    </p>
                </>
            )}
            {lang === 'ЦСЯ' && (
                <>
                    <p className="_-ОСНОВНОЙ_Основной-отст1-5 ParaOverride-5">
                        <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> </span>
                        <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">П</span>
                        {!vmestoTrisvatogo && (
                            <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                {' '}
                                Боже Святый, иже во святых почиваяй, иже трисвятым гласом от Серафимов воспеваемый и от
                                Херувимов славословимый, и от всякия Небесныя Силы покланяемый, иже от небытия во еже
                                быти приведый всяческая, создавый человека по образу Твоему и по подобию, и всяким Твоим
                                дарованием украсивый, даяй просящему премудрость и разум, и не презираяй согрешающаго,
                                но полагаяй на спасение покаяние, сподобивый нас, смиренных и недостойных раб Твоих, и в
                                час сей стати пред славою святаго Твоего жертвенника, и должное Тебе поклонение и
                                славословие приносити. Сам, Владыко, приими и от уст нас, грешных, Трисвятую песнь, и
                                посети ны благостию Твоею, прости нам всякое согрешение вольное же и невольное, освяти
                                наша души и телеса, и даждь нам в преподобии служити Тебе вся дни живота нашего,
                                молитвами святыя Богородицы, и всех святых, от века Тебе благоугодивших.
                            </span>
                        )}
                    </p>
                    <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                        <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                            Яко свят еси, Боже наш, и Тебе славу возсылаем, Отцу, и Сыну, и Святому Духу, ныне и присно.
                        </span>
                    </p>
                </>
            )}

            {!vmestoTrisvatogo && (
                <>
                    <p className="_-ПЕТИТ_ПетитСТ-отст1-5">
                        <span className="_-ВЫДЕЛЕНИЯ_Красн-ПЕТИТ-в-осн">[</span>
                        <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">Тихо:</span>
                    </p>
                    <p className="_-ПЕТИТ_Петит-отст1-5">
                        <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> </span>
                        <span className="_-ВЫДЕЛЕНИЯ_Красн-ПЕТИТ-в-осн">Д</span>
                        <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> Благослови, владыка, пение Трисвято́</span>
                        <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">го!</span>
                        <span className="_-ВЫДЕЛЕНИЯ_Красн-ПЕТИТ-в-осн">]</span>
                    </p>
                </>
            )}
            <p className="_-ОСНОВНОЙ_КРАСН-отст1-5">
                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">
                    {' '}
                    После благословения выходит дьякон перед свя­ты­ми вра­тами и, поводя орарём, даёт тон сто­ящему
                    народу, го­воря:
                </span>
            </p>
            <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> </span>
                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">Д</span>
                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> и во веки веков.</span>
            </p>
            <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> </span>
                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">Н</span>
                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> Аминь.</span>
            </p>
            {!vmestoTrisvatogo && (
                <>
                    {lang === 'default' && (
                        <>
                            <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ"> Свято</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">й Боже, свято</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">й Крепкий, свято</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">й Бессмерт­ный, помилуй нас </span>
                                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">(трижды)</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">.</span>
                            </p>
                            <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ"> Слава, и ныне. </span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">Свято</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">й Бессмертный, помилуй нас. Свято</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">й Боже, свято</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">й Крепкий, свято</span>
                                <span className="_-ДР--ГАРНИТУРЫ_УДАРЕНИЕ">`</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">й Бес­смерт­ный, помилуй нас.</span>
                            </p>
                        </>
                    )}
                    {lang === 'ЦСЯ' && (
                        <>
                            <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    {' '}
                                    Святый Боже, / Святый Крепкий, / Святый Безсмертный, помилуй нас.{' '}
                                </span>
                                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">(трижды)</span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">.</span>
                            </p>
                            <p className="_-ОСНОВНОЙ_Основной-отст1-5">
                                <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ"> Слава, и ныне. </span>
                                <span className="_-ВЫДЕЛЕНИЯ_ЧЁРНЫЙ">
                                    Святый Безсмертный, помилуй нас. Святый Боже, / Святый Крепкий, / Святый
                                    Безсмертный, помилуй нас.
                                </span>
                            </p>
                        </>
                    )}
                </>
            )}
            {vmestoTrisvatogo && (
                <>
                    <p className="_-ОСНОВНОЙ_Имя-части-отст5 ParaOverride-12">
                        <span className="_-ВЫДЕЛЕНИЯ_КРАСНЫЙ">Вместо Трисвятого</span>
                    </p>
                    <p className="_-ОСНОВНОЙ_Основной-отст1-5">{vmestoTrisvatogo}</p>
                </>
            )}
        </>
    );
};
export default Trisvatoe;
