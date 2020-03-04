import React, { useState, useRef, useEffect } from 'react';
import { arrayOf, string, func } from 'prop-types';
import styled from 'styled-components';

import Input from '../../Input/web/Input';

const escapeRegExp = str => str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

const StyledInput = styled(Input)`
  z-index: 1;

  ${({
    showOptions,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) =>
    showOptions
      ? `
        border-color: ${input.border.color.typed};
        border-bottom-width: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        & label {
          color: ${input.label.color.focus};
          font-weight: ${input.label.font.weight.typed};
        }
      `
      : ''}
`;

const Wrapper = styled.div`
  position: relative;
`;

const List = styled.ul`
  position: absolute;
  margin: 0;

  padding: 0;

  z-index: 999;

  ${({
    theme: {
      yoga: {
        components: { autoComplete },
      },
    },
  }) => `
    top: ${autoComplete.height}px;
    width: ${autoComplete.width}px;

    background-color: ${autoComplete.field.backgroundColor};
    border:
      ${autoComplete.border.width}px solid ${autoComplete.border.color.typed};
    border-top-width: 0;

    border-bottom-left-radius: ${autoComplete.border.radius}px;
    border-bottom-right-radius: ${autoComplete.border.radius}px;

    max-height: ${autoComplete.height * 5}px;
    overflow: hidden;
  `}
`;

const Item = styled.li`
  line-height: 20px;
  list-style: none;

  cursor: pointer;

  ${({
    theme: {
      yoga: {
        components: { autoComplete },
      },
    },
  }) => `
    background-color: ${autoComplete.list.backgroundColor.default};
    outline: none;

    font-size: ${autoComplete.list.font.size}px;
    font-weight: ${autoComplete.list.font.weight.default};

    padding:
      ${autoComplete.list.padding.top}px
      ${autoComplete.list.padding.right}px
      ${autoComplete.list.padding.bottom}px
      ${autoComplete.list.padding.left}px;

    &:hover,
    &:focus {
      background-color: ${autoComplete.list.backgroundColor.hover};
    }
  `}
`;

const Match = styled.mark`
  color: inherit;
  background: transparent;

  ${({
    theme: {
      yoga: {
        components: { autoComplete },
      },
    },
  }) => `
    font-weight: ${autoComplete.list.font.weight.matched};
  `}
`;

const AutoComplete = ({ options, value, onSelect, onChange, ...props }) => {
  const [showOption, setShowOption] = useState(false);
  const [focusedOption, setFocusedOption] = useState(null);

  const inputRef = useRef(null);
  const optionsRef = useRef(null);

  const reg = new RegExp(`(${escapeRegExp(value || '').trim() || null})`, 'gi');

  useEffect(() => {
    window.addEventListener('click', ({ target }) => {
      if (!inputRef.current?.contains(target)) {
        setShowOption(false);
        setFocusedOption(null);
      }
    });
  }, []);

  const closeOptions = () => {
    setShowOption(false);
    setFocusedOption(null);
  };

  const handleSelect = e => {
    inputRef.current.focus();
    closeOptions();
    onSelect(e.target.textContent);
  };

  const handleKeyDown = e => {
    const { key, shiftKey } = e;

    if (key === 'Escape') {
      inputRef.current.focus();
      closeOptions();
    }

    if (key === 'Enter' && focusedOption) {
      handleSelect(e);
    }

    if (key === 'ArrowDown' || (key === 'Tab' && !shiftKey)) {
      e.preventDefault();
      if (!focusedOption && optionsRef.current) {
        setFocusedOption(optionsRef.current.firstChild);
        optionsRef.current.firstChild.focus();
      }

      if (focusedOption && focusedOption.nextElementSibling) {
        focusedOption.nextElementSibling.focus();
        setFocusedOption(focusedOption.nextElementSibling);
      }
    }

    if (key === 'ArrowUp' || (key === 'Tab' && shiftKey)) {
      e.preventDefault();
      if (
        optionsRef.current &&
        focusedOption === optionsRef.current.firstChild
      ) {
        setFocusedOption(null);
        inputRef.current.focus();
      }

      if (focusedOption && focusedOption.previousElementSibling) {
        focusedOption.previousElementSibling.focus();
        setFocusedOption(focusedOption.previousElementSibling);
      }
    }
  };

  const handleChange = e => {
    setShowOption(true);
    onChange(e);
  };

  const renderList = optionsList => {
    const inputedValue = value?.toLowerCase().trim();

    const list = optionsList
      .filter(option => option.match(reg))
      .sort((first, second) =>
        first.toLowerCase().indexOf(inputedValue) <
        second.toLowerCase().indexOf(inputedValue)
          ? -1
          : 1,
      )
      .slice(0, 5)
      .map(option => (
        <Item key={option} tabIndex={0} onClick={handleSelect}>
          {option
            .split(reg)
            .map((part, index) =>
              part.match(reg) ? (
                <Match key={index}>{part}</Match>
              ) : (
                <React.Fragment key={`unmatch-${index}`}>{part}</React.Fragment>
              ),
            )}
        </Item>
      ));

    if (!list.length) {
      setShowOption(false);

      return null;
    }

    return list;
  };

  return (
    <Wrapper {...props} onKeyDown={handleKeyDown}>
      <StyledInput
        onChange={handleChange}
        onClean={closeOptions}
        onFocus={() => setShowOption(Boolean(value))}
        ref={inputRef}
        showOptions={showOption}
        value={value}
      />
      {options && showOption && (
        <List ref={optionsRef}>{renderList(options)}</List>
      )}
    </Wrapper>
  );
};

AutoComplete.propTypes = {
  options: arrayOf(string),
  value: string,
  onSelect: func,
  onChange: func,
};

AutoComplete.defaultProps = {
  value: '',
  onSelect: () => {},
  onChange: () => {},
  options: [
    'Aberdeen',
    'Abilene',
    'Akron',
    'Albany',
    'Albuquerque',
    'Alexandria',
    'Allentown',
    'Amarillo',
    'Anaheim',
    'Anchorage',
    'Ann Arbor',
    'Antioch',
    'Apple Valley',
    'Appleton',
    'Arlington',
    'Arvada',
    'Asheville',
    'Athens',
    'Atlanta',
    'Atlantic City',
    'Augusta',
    'Aurora',
    'Austin',
    'Bakersfield',
    'Baltimore',
    'Barnstable',
    'Baton Rouge',
    'Beaumont',
    'Bel Air',
    'Bellevue',
    'Berkeley',
    'Bethlehem',
    'Billings',
    'Birmingham',
    'Bloomington',
    'Boise',
    'Boise City',
    'Bonita Springs',
    'Boston',
    'Boulder',
    'Bradenton',
    'Bremerton',
    'Bridgeport',
    'Brighton',
    'Brownsville',
    'Bryan',
    'Buffalo',
    'Burbank',
    'Burlington',
    'Cambridge',
    'Canton',
    'Cape Coral',
    'Carrollton',
    'Cary',
    'Cathedral City',
    'Cedar Rapids',
    'Champaign',
    'Chandler',
    'Charleston',
    'Charlotte',
    'Chattanooga',
    'Chesapeake',
    'Chicago',
    'Chula Vista',
    'Cincinnati',
    'Clarke County',
    'Clarksville',
    'Clearwater',
    'Cleveland',
    'College Station',
    'Colorado Springs',
    'Columbia',
    'Columbus',
    'Concord',
    'Coral Springs',
    'Corona',
    'Corpus Christi',
    'Costa Mesa',
    'Dallas',
    'Daly City',
    'Danbury',
    'Davenport',
    'Davidson County',
    'Dayton',
    'Daytona Beach',
    'Deltona',
    'Denton',
    'Denver',
    'Des Moines',
    'Detroit',
    'Downey',
    'Duluth',
    'Durham',
    'El Monte',
    'El Paso',
    'Elizabeth',
    'Elk Grove',
    'Elkhart',
    'Erie',
    'Escondido',
    'Eugene',
    'Evansville',
    'Fairfield',
    'Fargo',
    'Fayetteville',
    'Fitchburg',
    'Flint',
    'Fontana',
    'Fort Collins',
    'Fort Lauderdale',
    'Fort Smith',
    'Fort Walton Beach',
    'Fort Wayne',
    'Fort Worth',
    'Frederick',
    'Fremont',
    'Fresno',
    'Fullerton',
    'Gainesville',
    'Garden Grove',
    'Garland',
    'Gastonia',
    'Gilbert',
    'Glendale',
    'Grand Prairie',
    'Grand Rapids',
    'Grayslake',
    'Green Bay',
    'GreenBay',
    'Greensboro',
    'Greenville',
    'Gulfport-Biloxi',
    'Hagerstown',
    'Hampton',
    'Harlingen',
    'Harrisburg',
    'Hartford',
    'Havre de Grace',
    'Hayward',
    'Hemet',
    'Henderson',
    'Hesperia',
    'Hialeah',
    'Hickory',
    'High Point',
    'Hollywood',
    'Honolulu',
    'Houma',
    'Houston',
    'Howell',
    'Huntington',
    'Huntington Beach',
    'Huntsville',
    'Independence',
    'Indianapolis',
    'Inglewood',
    'Irvine',
    'Irving',
    'Jackson',
    'Jacksonville',
    'Jefferson',
    'Jersey City',
    'Johnson City',
    'Joliet',
    'Kailua',
    'Kalamazoo',
    'Kaneohe',
    'Kansas City',
    'Kennewick',
    'Kenosha',
    'Killeen',
    'Kissimmee',
    'Knoxville',
    'Lacey',
    'Lafayette',
    'Lake Charles',
    'Lakeland',
    'Lakewood',
    'Lancaster',
    'Lansing',
    'Laredo',
    'Las Cruces',
    'Las Vegas',
    'Layton',
    'Leominster',
    'Lewisville',
    'Lexington',
    'Lincoln',
    'Little Rock',
    'Long Beach',
    'Lorain',
    'Los Angeles',
    'Louisville',
    'Lowell',
    'Lubbock',
    'Macon',
    'Madison',
    'Manchester',
    'Marina',
    'Marysville',
    'McAllen',
    'McHenry',
    'Medford',
    'Melbourne',
    'Memphis',
    'Merced',
    'Mesa',
    'Mesquite',
    'Miami',
    'Milwaukee',
    'Minneapolis',
    'Miramar',
    'Mission Viejo',
    'Mobile',
    'Modesto',
    'Monroe',
    'Monterey',
    'Montgomery',
    'Moreno Valley',
    'Murfreesboro',
    'Murrieta',
    'Muskegon',
    'Myrtle Beach',
    'Naperville',
    'Naples',
    'Nashua',
    'Nashville',
    'New Bedford',
    'New Haven',
    'New London',
    'New Orleans',
    'New York',
    'New York City',
    'Newark',
    'Newburgh',
    'Newport News',
    'Norfolk',
    'Normal',
    'Norman',
    'North Charleston',
    'North Las Vegas',
    'North Port',
    'Norwalk',
    'Norwich',
    'Oakland',
    'Ocala',
    'Oceanside',
    'Odessa',
    'Ogden',
    'Oklahoma City',
    'Olathe',
    'Olympia',
    'Omaha',
    'Ontario',
    'Orange',
    'Orem',
    'Orlando',
    'Overland Park',
    'Oxnard',
    'Palm Bay',
    'Palm Springs',
    'Palmdale',
    'Panama City',
    'Pasadena',
    'Paterson',
    'Pembroke Pines',
    'Pensacola',
    'Peoria',
    'Philadelphia',
    'Phoenix',
    'Pittsburgh',
    'Plano',
    'Pomona',
    'Pompano Beach',
    'Port Arthur',
    'Port Orange',
    'Port Saint Lucie',
    'Port St. Lucie',
    'Portland',
    'Portsmouth',
    'Poughkeepsie',
    'Providence',
    'Provo',
    'Pueblo',
    'Punta Gorda',
    'Racine',
    'Raleigh',
    'Rancho Cucamonga',
    'Reading',
    'Redding',
    'Reno',
    'Richland',
    'Richmond',
    'Richmond County',
    'Riverside',
    'Roanoke',
    'Rochester',
    'Rockford',
    'Roseville',
    'Round Lake Beach',
    'Sacramento',
    'Saginaw',
    'Saint Louis',
    'Saint Paul',
    'Saint Petersburg',
    'Salem',
    'Salinas',
    'Salt Lake City',
    'San Antonio',
    'San Bernardino',
    'San Buenaventura',
    'San Diego',
    'San Francisco',
    'San Jose',
    'Santa Ana',
    'Santa Barbara',
    'Santa Clara',
    'Santa Clarita',
    'Santa Cruz',
    'Santa Maria',
    'Santa Rosa',
    'Sarasota',
    'Savannah',
    'Scottsdale',
    'Scranton',
    'Seaside',
    'Seattle',
    'Sebastian',
    'Shreveport',
    'Simi Valley',
    'Sioux City',
    'Sioux Falls',
    'South Bend',
    'South Lyon',
    'Spartanburg',
    'Spokane',
    'Springdale',
    'Springfield',
    'St. Louis',
    'St. Paul',
    'St. Petersburg',
    'Stamford',
    'Sterling Heights',
    'Stockton',
    'Sunnyvale',
    'Syracuse',
    'Tacoma',
    'Tallahassee',
    'Tampa',
    'Temecula',
    'Tempe',
    'Thornton',
    'Thousand Oaks',
    'Toledo',
    'Topeka',
    'Torrance',
    'Trenton',
    'Tucson',
    'Tulsa',
    'Tuscaloosa',
    'Tyler',
    'Utica',
    'Vallejo',
    'Vancouver',
    'Vero Beach',
    'Victorville',
    'Virginia Beach',
    'Visalia',
    'Waco',
    'Warren',
    'Washington',
    'Waterbury',
    'Waterloo',
    'West Covina',
    'West Valley City',
    'Westminster',
    'Wichita',
    'Wilmington',
    'Winston',
    'Winter Haven',
    'Worcester',
    'Yakima',
    'Yonkers',
    'York',
    'Youngstown',
  ],
};

export default AutoComplete;
