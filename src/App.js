import { Select, Tag } from '@cedcommerce/ounce-ui';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [selected, setSelected] = useState('')

  useEffect(() => {
    console.log(optionArray)
  }, [])

  const optionArray = [
    {
      group: [
        {
          label: <b>Preferred option</b>,
          value: '0.1'
        },
        {
          label: 'Non-preferred option',
          value: '0.2'
        }
      ],
      label: 'Cateogory Zero',
      value: '0.0'
    },
    {
      group: [
        {
          label: 'Option 1.1',
          value: '1.1'
        },
        {
          label: 'Option 1.2',
          value: '1.2'
        }
      ],
      label: 'Category One',
      value: '1.0'
    },
    {
      group: [
        {
          label: 'Option2',
          value: '2'
        },
        {
          label: 'Option3',
          value: '3'
        },
        {
          label: 'Option4',
          value: '4'
        },
        {
          label: 'Option5',
          value: '5'
        },
        {
          label: 'Option6',
          value: '6'
        },
        {
          label: 'Option7',
          value: '7'
        },
        {
          label: 'Option8',
          value: '8'
        }
      ],
      label: 'Collection Of headings',
      value: '2.0'
    },
    {
      label: 'Standalone Option',
      value: '3.0'
    }
  ]

  const fetchLabel = () => {
    let res = ''
    optionArray.forEach((item) => {
      if (Object.keys(item).includes('group')) {
        item.group.forEach((subItem) => {
          if (subItem.value === selected) {
            res = subItem.label
          }
        })
      }
      else {
        if (item.value === selected) {
          res = item.label
        }
      }
    })
    return res
  }

  return (
    <div className="App">
      <div style={{ width: '400px', margin: '50px auto' }}>
        <Select
          dropDownheight={200}
          name="Select Your Choice"
          onChange={function noRefCheck(val) {
            setSelected(val)
          }}
          value={selected}
          options={optionArray}
          placeholder="Select"
          popoverContainer="body"
          selectHelp="Write help text here"
          thickness="thick"
        />
        {(selected !== '') ? <Tag destroy={function noRefCheck() {
          setSelected('')
        }}>
          {fetchLabel()}
        </Tag> : null}
      </div>
    </div>
  );
}

export default App;
