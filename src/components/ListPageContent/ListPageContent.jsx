import React from 'react';
import ResultsList from '../ResultsList/ResultsList';

import './ListPageContent.css';

const ListPageContent = ({ products }) => (
  <div className="listPageContent">
    <section className="filters filters--3">
      <div className="filters filters--3">
        <ul className="active" data-accordion="true">
          <li
            id="aggregate-genders"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-genders"
              className="title"
              href="#aggregate-genders"
            >
              Gênero
            </a>
            <div className="content genders content-search-filter">
              <a
                href="//www.netshoes.com.br/masculino?nsCat=Natural&q=corda"
                qa-automation="search-genders"
              >
                Masculino <span>670</span>
              </a>
              <a
                href="//www.netshoes.com.br/feminino?nsCat=Natural&q=corda"
                qa-automation="search-genders"
              >
                Feminino <span>668</span>
              </a>
              <a
                href="//www.netshoes.com.br/menino?nsCat=Natural&q=corda"
                qa-automation="search-genders"
              >
                Menino <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/menina?nsCat=Natural&q=corda"
                qa-automation="search-genders"
              >
                Menina <span>1</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-size"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-size"
              className="title"
              href="#aggregate-size"
            >
              Tamanho
            </a>
            <div className="content size content-search-filter">
              <div className="mini-search" data-id="mini-search-size">
                <input className="text" name="filter-size" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/tamanho-12m?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">12m</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-200?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">200</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-egg?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">Egg</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-gg?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">Gg</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-12-oz?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">12 oz</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-9m?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">9m</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-14-oz?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">14 oz</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-3m?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">3m</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-10-oz?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">10 oz</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-p?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">P</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-m?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">M</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-g?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">G</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-6?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">6</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-7?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">7</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-8?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">8</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-9?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">9</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-10?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">10</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-12?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">12</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-33?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">33</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-34?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">34</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-35?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">35</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-36?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">36</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-37?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">37</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-38?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">38</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-39?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">39</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-40?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">40</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-41?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">41</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-42?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">42</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-43?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">43</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-3-m?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">3 M</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-l3?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">L3</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-l4?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">L4</span>
              </a>
              <a
                href="//www.netshoes.com.br/tamanho-unico?nsCat=Natural&q=corda"
                qa-automation="search-size"
              >
                <span className="rounded">Único</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-brand"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-brand"
              className="title"
              href="#aggregate-brand"
            >
              Marca
            </a>
            <div className="content brand content-search-filter">
              <div className="mini-search" data-id="mini-search-brand">
                <input className="text" name="filter-brand" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/a-esportiva?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                A esportiva <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/acte?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Acte <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/acte-sports?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Acte sports <span>22</span>
              </a>
              <a
                href="//www.netshoes.com.br/adidas-fitness?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Adidas fitness <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/ahead-sports?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Ahead sports <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/anacapri?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Anacapri <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/armais?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Armais <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/atrio?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Atrio <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/ats?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Ats <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/azteq?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Azteq <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/babolat?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Babolat <span>49</span>
              </a>
              <a
                href="//www.netshoes.com.br/beira-rio?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Beira rio <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/black-bull?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Black bull <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/body-sculpture?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Body sculpture <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/bounce?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Bounce <span>15</span>
              </a>
              <a
                href="//www.netshoes.com.br/capodarte?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Capodarte <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/cravo---canela?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Cravo &amp; canela <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/crysalis?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Crysalis <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/dakota?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Dakota <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/dicat-sports?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Dicat sports <span>11</span>
              </a>
              <a
                href="//www.netshoes.com.br/dogma?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Dogma <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/dream?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Dream <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/dunlop?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Dunlop <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/enforce-fitness?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Enforce Fitness <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/everlast?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Everlast <span>10</span>
              </a>
              <a
                href="//www.netshoes.com.br/firezzi?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Firezzi <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/gamma?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Gamma <span>11</span>
              </a>
              <a
                href="//www.netshoes.com.br/gears?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Gears <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/go-tennis?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Go tennis <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/gold-sports?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Gold sports <span>11</span>
              </a>
              <a
                href="//www.netshoes.com.br/golden?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Golden <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/gonew?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Gonew <span>8</span>
              </a>
              <a
                href="//www.netshoes.com.br/guepardo?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Guepardo <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/guga-kuerten?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Guga Kuerten <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/harbinger?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Harbinger <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/head?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Head <span>28</span>
              </a>
              <a
                href="//www.netshoes.com.br/hidrolight?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Hidrolight <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/kanxa?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Kanxa <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/kestal?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Kestal <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/kikos?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Kikos <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/kl-master-fitness?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Kl master fitness <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/lance-livre?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Lance livre <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/leader?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Leader <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/lequipo?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Lequipo <span>11</span>
              </a>
              <a
                href="//www.netshoes.com.br/liga-retro?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Liga retrô <span>7</span>
              </a>
              <a
                href="//www.netshoes.com.br/lilly's-closet?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Lilly's closet <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/liveup?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Liveup <span>46</span>
              </a>
              <a
                href="//www.netshoes.com.br/luiza-barcelos?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Luiza barcelos <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/luxilon?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Luxilon <span>7</span>
              </a>
              <a
                href="//www.netshoes.com.br/mamut-strong?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Mamut strong <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/man-kung?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Man Kung <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/mormaii?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Mormaii <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/msv?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Msv <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/muvin?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Muvin <span>19</span>
              </a>
              <a
                href="//www.netshoes.com.br/natural-fitness?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Natural fitness <span>85</span>
              </a>
              <a
                href="//www.netshoes.com.br/nautika?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Nautika <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/new-era?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                New era <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/oneal?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Oneal <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/pastorelli?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Pastorelli <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/polimet?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Polimet <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/polisport?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Polisport <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/pretorian?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Pretorian <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/prince?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Prince <span>13</span>
              </a>
              <a
                href="//www.netshoes.com.br/proaction?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Proaction <span>12</span>
              </a>
              <a
                href="//www.netshoes.com.br/prokennex?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Prokennex <span>22</span>
              </a>
              <a
                href="//www.netshoes.com.br/prottector?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Prottector <span>7</span>
              </a>
              <a
                href="//www.netshoes.com.br/purys?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Purys <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/redesport?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Redesport <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/rope?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Rope <span>33</span>
              </a>
              <a
                href="//www.netshoes.com.br/rythmoon?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Rythmoon <span>18</span>
              </a>
              <a
                href="//www.netshoes.com.br/sigma?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Sigma <span>12</span>
              </a>
              <a
                href="//www.netshoes.com.br/signum-pro?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Signum pro <span>10</span>
              </a>
              <a
                href="//www.netshoes.com.br/sklz?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Sklz <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/spank?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Spank <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/spider?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Spider <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/sportin?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Sportin <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/tecnifibre?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Tecnifibre <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/titan?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Titan <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/topspin?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Topspin <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/tribo-fitness?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Tribo fitness <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/uplift?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Uplift <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/valentina?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Valentina <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/vizzano?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Vizzano <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/vollke?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Vollke <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/vollo?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Vollo <span>10</span>
              </a>
              <a
                href="//www.netshoes.com.br/walkabout?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Walkabout <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/wct-fitness?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Wct fitness <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/wellness?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Wellness <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/wilson?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Wilson <span>28</span>
              </a>
              <a
                href="//www.netshoes.com.br/winmax?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Winmax <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/y88?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Y88 <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/yonex?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Yonex <span>18</span>
              </a>
              <a
                href="//www.netshoes.com.br/zatz?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Zatz <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/ziva?nsCat=Natural&q=corda"
                qa-automation="search-brand"
              >
                Ziva <span>1</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-salePrice"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-salePrice"
              className="title"
              href="#aggregate-salePrice"
            >
              Preço
            </a>
            <div className="content saleprice content-search-filter">
              <div
                className="mini-search"
                data-id="mini-search-salePrice"
              >
                <input className="text" name="filter-saleprice" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_preco=0-4000"
                qa-automation="search-salePrice"
              >
                Menos de R$ 40 <span>177</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_preco=4000-6000"
                qa-automation="search-salePrice"
              >
                R$ 40 - R$ 60 <span>70</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_preco=6000-11000"
                qa-automation="search-salePrice"
              >
                R$ 60 - R$ 110 <span>108</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_preco=11000-16000"
                qa-automation="search-salePrice"
              >
                R$ 110 - R$ 160 <span>88</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_preco=16000-20000"
                qa-automation="search-salePrice"
              >
                R$ 160 - R$ 200 <span>71</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_preco=20000-37000"
                qa-automation="search-salePrice"
              >
                R$ 200 - R$ 370 <span>88</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_preco=37000-331000"
                qa-automation="search-salePrice"
              >
                R$ 370 - R$ 3310 <span>96</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-highlight"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-highlight"
              className="title"
              href="#aggregate-highlight"
            >
              Navegar Em
            </a>
            <div className="content highlight content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&navegar-em=zattini"
                qa-automation="search-highlight"
              >
                ZATTINI <span>16</span>
              </a>
            </div>
          </li>
          <li id="aggregate-149" className="item list-item-aggregates ">
            <a
              id="title-aggregate-149"
              className="title"
              href="#aggregate-149"
            >
              Material
            </a>
            <div className="content 149 content-search-filter">
              <div className="mini-search" data-id="mini-search-149">
                <input className="text" name="filter-149" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=aco"
                qa-automation="search-149"
              >
                Aço <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=aco-inox-e-borracha"
                qa-automation="search-149"
              >
                Aço inox e borracha <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=couro"
                qa-automation="search-149"
              >
                Couro <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=macica"
                qa-automation="search-149"
              >
                Maciça <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=monofilamento"
                qa-automation="search-149"
              >
                Monofilamento <span>7</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=multifilamento"
                qa-automation="search-149"
              >
                Multifilamento <span>7</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=nylon"
                qa-automation="search-149"
              >
                Nylon <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=outros"
                qa-automation="search-149"
              >
                Outros <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=plastico"
                qa-automation="search-149"
              >
                Plástico <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=poliamida"
                qa-automation="search-149"
              >
                Poliamida <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=polietileno"
                qa-automation="search-149"
              >
                Polietileno <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=poliester"
                qa-automation="search-149"
              >
                Poliéster <span>15</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=pvc"
                qa-automation="search-149"
              >
                Pvc <span>18</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=silicone"
                qa-automation="search-149"
              >
                Silicone <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=sintetico"
                qa-automation="search-149"
              >
                Sintético <span>15</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&material=textil"
                qa-automation="search-149"
              >
                Têxtil <span>4</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-colorName"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-colorName"
              className="title"
              href="#aggregate-colorName"
            >
              Cor
            </a>
            <div className="content colorname content-search-filter">
              <div
                className="mini-search"
                data-id="mini-search-colorName"
              >
                <input className="text" name="filter-colorname" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/amarelo?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Amarelo <i className="ns-color ns-color-bg-amarelo" />
                <span>36</span>
              </a>
              <a
                href="//www.netshoes.com.br/amarelo-claro?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Amarelo claro{" "}
                <i className="ns-color ns-color-bg-amarelo-claro" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/azul?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Azul <i className="ns-color ns-color-bg-azul" />
                <span>94</span>
              </a>
              <a
                href="//www.netshoes.com.br/azul-claro?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Azul claro{" "}
                <i className="ns-color ns-color-bg-azul-claro" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/azul-royal?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Azul royal{" "}
                <i className="ns-color ns-color-bg-azul-royal" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/bege?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Bege <i className="ns-color ns-color-bg-bege" />
                <span>15</span>
              </a>
              <a
                href="//www.netshoes.com.br/branco?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Branco <i className="ns-color ns-color-bg-branco" />
                <span>59</span>
              </a>
              <a
                href="//www.netshoes.com.br/bronze?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Bronze <i className="ns-color ns-color-bg-bronze" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/cafe?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Café <i className="ns-color ns-color-bg-cafe" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/caramelo?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Caramelo <i className="ns-color ns-color-bg-caramelo" />
                <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/chumbo?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Chumbo <i className="ns-color ns-color-bg-chumbo" />
                <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/cinza?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Cinza <i className="ns-color ns-color-bg-cinza" />
                <span>21</span>
              </a>
              <a
                href="//www.netshoes.com.br/colorido?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Colorido <i className="ns-color ns-color-bg-colorido" />
                <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/creme?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Creme <i className="ns-color ns-color-bg-creme" />
                <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/dourado?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Dourado <i className="ns-color ns-color-bg-dourado" />
                <span>13</span>
              </a>
              <a
                href="//www.netshoes.com.br/gelo?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Gelo <i className="ns-color ns-color-bg-gelo" />
                <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/grafite?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Grafite <i className="ns-color ns-color-bg-grafite" />
                <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/incolor?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Incolor <i className="ns-color ns-color-bg-incolor" />
                <span>16</span>
              </a>
              <a
                href="//www.netshoes.com.br/jeans?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Jeans <i className="ns-color ns-color-bg-jeans" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/laranja?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Laranja <i className="ns-color ns-color-bg-laranja" />
                <span>37</span>
              </a>
              <a
                href="//www.netshoes.com.br/lilas?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Lilás <i className="ns-color ns-color-bg-lilas" />
                <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/magenta?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Magenta <i className="ns-color ns-color-bg-magenta" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/marinho?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Marinho <i className="ns-color ns-color-bg-marinho" />
                <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/marrom?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Marrom <i className="ns-color ns-color-bg-marrom" />
                <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/marrom-escuro?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Marrom escuro{" "}
                <i className="ns-color ns-color-bg-marrom-escuro" />
                <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/nude?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Nude <i className="ns-color ns-color-bg-nude" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/off-white?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Off white <i className="ns-color ns-color-bg-off-white" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/pink?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Pink <i className="ns-color ns-color-bg-pink" />
                <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/prata?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Prata <i className="ns-color ns-color-bg-prata" />
                <span>25</span>
              </a>
              <a
                href="//www.netshoes.com.br/preto?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Preto <i className="ns-color ns-color-bg-preto" />
                <span>237</span>
              </a>
              <a
                href="//www.netshoes.com.br/rosa?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Rosa <i className="ns-color ns-color-bg-rosa" />
                <span>23</span>
              </a>
              <a
                href="//www.netshoes.com.br/rosa-bebe?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Rosa bebê <i className="ns-color ns-color-bg-rosa-bebe" />
                <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/roxo?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Roxo <i className="ns-color ns-color-bg-roxo" />
                <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/sortido?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Sortido <i className="ns-color ns-color-bg-sortido" />
                <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/verde?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Verde <i className="ns-color ns-color-bg-verde" />
                <span>16</span>
              </a>
              <a
                href="//www.netshoes.com.br/verde-limao?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Verde limão{" "}
                <i className="ns-color ns-color-bg-verde-limao" />
                <span>9</span>
              </a>
              <a
                href="//www.netshoes.com.br/vermelho?nsCat=Natural&q=corda"
                qa-automation="search-colorName"
              >
                Vermelho <i className="ns-color ns-color-bg-vermelho" />
                <span>43</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-recommendedFor"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-recommendedFor"
              className="title"
              href="#aggregate-recommendedFor"
            >
              Recomendado para
            </a>
            <div className="content recommendedfor content-search-filter">
              <a
                href="//www.netshoes.com.br/adulto?nsCat=Natural&q=corda"
                qa-automation="search-recommendedFor"
              >
                Adulto <span>697</span>
              </a>
              <a
                href="//www.netshoes.com.br/infantil?nsCat=Natural&q=corda"
                qa-automation="search-recommendedFor"
              >
                Infantil <span>1</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-productType"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-productType"
              className="title"
              href="#aggregate-productType"
            >
              Tipo de Produto
            </a>
            <div className="content producttype content-search-filter">
              <div
                className="mini-search"
                data-id="mini-search-productType"
              >
                <input className="text" name="filter-producttype" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/acessorio?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Acessório <span>39</span>
              </a>
              <a
                href="//www.netshoes.com.br/barras-e-puxadores?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Barras e puxadores <span>14</span>
              </a>
              <a
                href="//www.netshoes.com.br/bolas?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Bolas <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/bolas-de-ginastica?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Bolas de ginástica <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/botas?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Botas <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/camas-elasticas-e-steps?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Camas Elásticas e Steps <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/camisas-polo?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Camisas polo <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/camisetas?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Camisetas <span>7</span>
              </a>
              <a
                href="//www.netshoes.com.br/cordas?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Cordas <span>395</span>
              </a>
              <a
                href="//www.netshoes.com.br/elasticos-e-faixas?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Elásticos e faixas <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/equipamentos?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Equipamentos <span>8</span>
              </a>
              <a
                href="//www.netshoes.com.br/equipamentos-de-treino?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Equipamentos de Treino <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/estacoes?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Estações <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/inflaveis?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Infláveis <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/kits?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Kits <span>106</span>
              </a>
              <a
                href="//www.netshoes.com.br/medicine-ball?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Medicine ball <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/raquetes?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Raquetes <span>2</span>
              </a>
              <a
                href="//www.netshoes.com.br/sandalias?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Sandálias <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/sapatilhas?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Sapatilhas <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/tenis?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Tênis <span>17</span>
              </a>
              <a
                href="//www.netshoes.com.br/yoga-e-pilates?nsCat=Natural&q=corda"
                qa-automation="search-productType"
              >
                Yoga e pilates <span>3</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-department"
            className="item list-item-aggregates "
          >
            <a
              id="title-aggregate-department"
              className="title"
              href="#aggregate-department"
            >
              Departamento
            </a>
            <div className="content department content-search-filter">
              <div
                className="mini-search"
                data-id="mini-search-department"
              >
                <input className="text" name="filter-department" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/artes-marciais?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Artes marciais <span>18</span>
              </a>
              <a
                href="//www.netshoes.com.br/aventura?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Aventura <span>8</span>
              </a>
              <a
                href="//www.netshoes.com.br/casual?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Casual <span>26</span>
              </a>
              <a
                href="//www.netshoes.com.br/fitness-e-musculacao?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Fitness e musculação <span>405</span>
              </a>
              <a
                href="//www.netshoes.com.br/futebol?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Futebol <span>7</span>
              </a>
              <a
                href="//www.netshoes.com.br/jogos?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Jogos <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/praia-e-piscina?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Praia e piscina <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/running?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Running <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/tennis-e-squash?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Tennis e squash <span>228</span>
              </a>
              <a
                href="//www.netshoes.com.br/volei?nsCat=Natural&q=corda"
                qa-automation="search-department"
              >
                Vôlei <span>1</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-discountPercent"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-discountPercent"
              className="title"
              href="#aggregate-discountPercent"
            >
              Desconto
            </a>
            <div className="content discountpercent content-search-filter">
              <div
                className="mini-search"
                data-id="mini-search-discountPercent"
              >
                <input className="text" name="filter-discountpercent" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_desconto=5-11"
                qa-automation="search-discountPercent"
              >
                5% - 11% <span>52</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_desconto=12-19"
                qa-automation="search-discountPercent"
              >
                12% - 19% <span>52</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_desconto=20-26"
                qa-automation="search-discountPercent"
              >
                20% - 26% <span>36</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_desconto=27-35"
                qa-automation="search-discountPercent"
              >
                27% - 35% <span>55</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_desconto=38-48"
                qa-automation="search-discountPercent"
              >
                38% - 48% <span>19</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_desconto=49-62"
                qa-automation="search-discountPercent"
              >
                49% - 62% <span>13</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&_desconto=63-75"
                qa-automation="search-discountPercent"
              >
                63% - 75% <span>7</span>
              </a>
            </div>
          </li>
          <li id="aggregate-42" className="item list-item-aggregates ">
            <a
              id="title-aggregate-42"
              className="title"
              href="#aggregate-42"
            >
              Característica
            </a>
            <div className="content 42 content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&caracteristica=com-contador"
                qa-automation="search-42"
              >
                Com contador <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&caracteristica=com-peso"
                qa-automation="search-42"
              >
                Com peso <span>3</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&caracteristica=regulavel"
                qa-automation="search-42"
              >
                Regulável <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&caracteristica=simples"
                qa-automation="search-42"
              >
                Simples <span>21</span>
              </a>
            </div>
          </li>
          <li id="aggregate-120" className="item list-item-aggregates ">
            <a
              id="title-aggregate-120"
              className="title"
              href="#aggregate-120"
            >
              Indicado para
            </a>
            <div className="content 120 content-search-filter">
              <div className="mini-search" data-id="mini-search-120">
                <input className="text" name="filter-120" />
                <i className="ns-icon ns-icon-search" />
              </div>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=1-usuario"
                qa-automation="search-120"
              >
                1 usuário <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=auxilia-emagrecimento"
                qa-automation="search-120"
              >
                Auxilia Emagrecimento <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=camping"
                qa-automation="search-120"
              >
                Camping <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=condicionamento-fisico"
                qa-automation="search-120"
              >
                Condicionamento Físico <span>6</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=dia-a-dia"
                qa-automation="search-120"
              >
                Dia a dia <span>477</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=jogo"
                qa-automation="search-120"
              >
                Jogo <span>89</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=postura-e-alongamento"
                qa-automation="search-120"
              >
                Postura e Alongamento <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=praia"
                qa-automation="search-120"
              >
                Praia <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=treinamento"
                qa-automation="search-120"
              >
                Treinamento <span>98</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=treinamento-funcional"
                qa-automation="search-120"
              >
                Treinamento Funcional <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&indicado-para=treino-e-competicao"
                qa-automation="search-120"
              >
                Treino e competição <span>2</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-avaliacao"
            className="item list-item-aggregates "
          >
            <a
              id="title-aggregate-avaliacao"
              className="title"
              href="#aggregate-avaliacao"
            >
              Avaliação
            </a>
            <div className="content avaliacao content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&avaliacao=00"
                qa-automation="search-avaliacao"
              >
                00 <span>653</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&avaliacao=03"
                qa-automation="search-avaliacao"
              >
                03 <span>1</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&avaliacao=04"
                qa-automation="search-avaliacao"
              >
                04 <span>30</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&avaliacao=05"
                qa-automation="search-avaliacao"
              >
                05 <span>14</span>
              </a>
            </div>
          </li>
          <li id="aggregate-95" className="item list-item-aggregates ">
            <a
              id="title-aggregate-95"
              className="title"
              href="#aggregate-95"
            >
              Fechamento
            </a>
            <div className="content 95 content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&fechamento=cadarco"
                qa-automation="search-95"
              >
                Cadarço <span>20</span>
              </a>
            </div>
          </li>
          <li id="aggregate-384" className="item list-item-aggregates ">
            <a
              id="title-aggregate-384"
              className="title"
              href="#aggregate-384"
            >
              Altura do Cano
            </a>
            <div className="content 384 content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&altura-do-cano=cano-baixo"
                qa-automation="search-384"
              >
                Cano baixo <span>13</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&altura-do-cano=cano-curto"
                qa-automation="search-384"
              >
                Cano curto <span>3</span>
              </a>
            </div>
          </li>
          <li id="aggregate-386" className="item list-item-aggregates ">
            <a
              id="title-aggregate-386"
              className="title"
              href="#aggregate-386"
            >
              Ocasião
            </a>
            <div className="content 386 content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&ocasiao=dia-a-dia"
                qa-automation="search-386"
              >
                Dia a dia <span>19</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&ocasiao=dia-a-dia-conforto"
                qa-automation="search-386"
              >
                Dia a dia,conforto <span>1</span>
              </a>
            </div>
          </li>
          <li
            id="aggregate-255"
            className="item list-item-aggregates opened "
          >
            <a
              id="title-aggregate-255"
              className="title"
              href="#aggregate-255"
            >
              Tipo
            </a>
            <div className="content 255 content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&tipo=corda-naval"
                qa-automation="search-255"
              >
                Corda naval <span>5</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&tipo=cordas"
                qa-automation="search-255"
              >
                Cordas <span>3</span>
              </a>
            </div>
          </li>
          <li id="aggregate-180" className="item list-item-aggregates ">
            <a
              id="title-aggregate-180"
              className="title"
              href="#aggregate-180"
            >
              Objetivo
            </a>
            <div className="content 180 content-search-filter">
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&objetivo=agilidade-e-velocidade"
                qa-automation="search-180"
              >
                Agilidade e Velocidade <span>4</span>
              </a>
              <a
                href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&objetivo=forca-e-resistencia"
                qa-automation="search-180"
              >
                Força e resistência <span>1</span>
              </a>
            </div>
          </li>
        </ul>
        <a
          className="unavailable-filter"
          href="//www.netshoes.com.br/busca?nsCat=Natural&q=corda&searchTermCapitalized=Corda&unavailable=true"
        >
          Mostrar não disponíveis
        </a>
      </div>
    </section>
    <ResultsList products={products} />
  </div>
);

export default ListPageContent;
