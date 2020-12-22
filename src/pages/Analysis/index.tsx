import React from 'react';
import {
  Input,
  DatePicker,
} from '@alifd/next';
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/next'


const Analysis = () => {
  const schema = {
    "type": "object",
    "properties": {
      "NO_NAME_FIELD_$1": {
        "key": "NO_NAME_FIELD_$1",
        "type": "object",
        "name": "NO_NAME_FIELD_$1",
        "x-component": "mega-layout",
        "x-component-props": {
          "grip": true,
          "columns": 2,
        },
        "properties": {
          "NO_NAME_FIELD_$3": {
            "key": "NO_NAME_FIELD_$3",
            "type": "object",
            "name": "NO_NAME_FIELD_$3",
            "x-component": "mega-layout",
            "x-component-props": {
              "labelCol": 4,
              "labelAlign": "left"
            },
            "properties": {
              "alignRight": {
                "key": "alignRight",
                "name": "alignRight",
                "title": "标题",
                "x-component": "input",
                "x-linkages": [
                  {
                    type: "value:visible",
                    target: "input",
                    condition: '{{ $self.value == "123"}}',//当值为123时发生联动
                    schema: {//控制bbb字段的标题，如果不指定condition，默认会走到该处
                      title: "这是标题"
                    },
                    otherwise: {//条件不满足时控制bbb字段标题
                      title: ""
                    }
                  }
                ]
              },
              "input": {
                "key": "input",
                "name": "input",
                "title": "input",
                "x-component": "input"
              }
            }
          },
          "input1": {
            "key": "input1",
            "name": "input1",
            "title": "input1",
            "x-mega-props" : {
              "span": '1'
            },
            "x-component": "input"
          },
          "input_2": {
            "key": "input_2",
            "name": "input_2",
            "x-mega-props" : {
              "span": '1'
            },
            "title": "input1",
            "x-component": "datepicker"
          }
        },
      },
    }
  }
  return (
    <SchemaForm
      schema={schema}
      components={{ DatePicker, Input }}
      expressionScope={{
        customTitle: 'this is custom title',
        customDescription: 'this is custom description',
        customPlaceholder: 'this is custom placeholder'
      }}
    >
      <FormButtonGroup offset={5}>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  );
};

export default Analysis;
