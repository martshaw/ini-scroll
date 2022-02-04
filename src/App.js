import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';

import {
  Index,
  InstantSearch,
  SearchBox,
  Configure,
  createInfiniteHitsSessionStorageCache,
} from 'react-instantsearch-dom';
import InfiniteHits from './InfiniteHits';
import './App.css';

const searchClient = algoliasearch(
  'XM7RSHALRD',
  '451041d72f5b80cd5cfd2f6f9c8e8862'
);

class App extends Component {
  cache1 = createInfiniteHitsSessionStorageCache();
  cache2 = createInfiniteHitsSessionStorageCache();
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch Multiple Indices infinite scroll demo</h1>
        <InstantSearch
          indexName="prod_de_de_offers"
          searchClient={searchClient}
        >
          <div id="prod_de_de_offers">
            <Index indexName="prod_de_de_offers" key="111">
              <h2>index: Offers</h2>
              <Configure hitsPerPage={16} />
              <SearchBox />
              <InfiniteHits
                minHitsPerPage={16}
                cache={this.cache1}
                test={this.loadNewIndex}
              />
            </Index>
          </div>
          {/* // Second infintie scroll index */}
          {/* <div id="int_de_de_assortments">
            <Index indexName="int_de_de_assortment" key="123">
              <h2>index: Products</h2>
              <Configure hitsPerPage={16} />
              <InfiniteHits minHitsPerPage={16} cache={this.cache2} />
            </Index>
          </div> */}
        </InstantSearch>
      </div>
    );
  }
}

export default App;
