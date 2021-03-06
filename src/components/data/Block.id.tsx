import { FC } from 'react';
import { GuideContainer } from '../styles/Guide.style';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Button } from '@chakra-ui/core';

export const Text = `query {
    transactions {
        edges {
            node {
                id
            }
        }
    }
}`;

export const BlockID: FC = () => {
    return(
        <GuideContainer>
            <h3 id="tx-id">Transaction IDs</h3>

            <p>
                Probably the most common use of GraphQL is to retrieve Transaction IDs. Note: upon accessing Transaction IDs 
                via GraphQL, you can retrieve associated data via the <a href="https://github.com/ArweaveTeam/arweave-js">arweave-js</a> "getData()" function.
            </p>

            <div className="copy-button">
                <Button
                    size="sm"
                    onClick={e => {
                        const el: any = document.querySelector('textarea.td-el');
                        el.select();
                        el.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                }}>
                    Copy
                </Button>
                <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }}  className="td-el"/>
            </div>

            <SyntaxHighlighter language="graphql" style={style}>
            {Text}
            </SyntaxHighlighter>
        </GuideContainer>
    );
}