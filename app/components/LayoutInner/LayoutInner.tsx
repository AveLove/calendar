import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import LeftIcon from 'components/svgs/LeftIcon';
import { css } from 'emotion';
import Header from 'components/Header/Header';
import DotsMenu from 'components/DotsMenu/DotsMenu';
import { useUpdateTOC } from 'hooks/useUpdateTOC';

const LayoutInner = ({ children, backLink = null, left = null, right = null, paddedContent = true }) => {
    const { date } = useParams();
    const history = useHistory();
    useUpdateTOC();
    const backLinkEffective = backLink || history.location.state?.backLink;
    return (
        <div
            className={css`
                z-index: 10;
            `}
        >
            <Header>
                <div
                    className={css`
                        flex-grow: 1;
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link to={backLinkEffective || `/date/${date}`} title="Назад">
                        <div
                            className={css`
                                padding: 18px;
                                &:hover {
                                    opacity: 0.8;
                                }
                            `}
                        >
                            <LeftIcon />
                        </div>
                    </Link>
                    {left}
                </div>
                <div
                    className={css`
                        flex-grow: 0;
                        display: flex;
                    `}
                >
                    {right}
                    <DotsMenu />
                </div>
            </Header>
            <div
                className={
                    paddedContent
                        ? css`
                              margin-top: 24px;
                              padding: 0 16px 16px 16px;
                          `
                        : ''
                }
            >
                {children}
            </div>
        </div>
    );
};
export default LayoutInner;
