import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CsButton, CsCol, CsRow, CsSelect, CsInput, CsTable, CsPopOver, CsIcon } from '../../components';
import { getQuestions, getSelectOptions, setSearchField } from '../../state/actions/questionActions';
import styles from './QuestionsPage.module.scss';

const Menu = () => (
  <div>
    <p>View</p>
    <p>Deactivate</p>
    <p>Add to Group</p>
    <p>Delete</p>
  </div>
);

class QuestionsPage extends PureComponent {

  componentDidMount() {
    const { getQuestions, getSelectOptions } = this.props;

    getSelectOptions();
    getQuestions({ searchApplied: false, searchValues: {} });
  }

  onChangeFieldValue = (id, value) => {
    const { questions, setSearchField } = this.props;
    const { searchValues } = questions;

    const payload = {
      ...searchValues,
      [id]: value
    };
    setSearchField(payload);
  }

  onClickSearch = () => {
    const { getQuestions, questions } = this.props;
    const { searchValues } = questions;
    getQuestions({ searchApplied: true, searchValues })
  }

  isSearchButtonEnabled = () => {
    const { questions } = this.props;

    const temp = Object.values(questions.searchValues).filter(item => item !== undefined);

    return temp.length > 0;
  }
  
  render () {
    const { questions } = this.props;

    const columns = [
      {
        title: '#',
        dataIndex: 'id',
      },
      {
        title: 'Question',
        dataIndex: 'question',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        render: (text, record, index) => {
          return questions.options.categories.find(item => item.value === text).label
        },
      },
      {
        title: 'State',
        dataIndex: 'state',
      },
      {
        title: 'Question Group',
        dataIndex: 'questionGroup',
        render: (text) => {
          return (
            <CsPopOver placement="topLeft" trigger="hover" content={text}>
              <p className={styles.view}>View</p>
            </CsPopOver>
          );
        }
      },
      {
        title: 'License',
        dataIndex: 'license',
        render: (text) => {
          return (
            <CsPopOver placement="topLeft" trigger="hover" content={questions.options.license.find(item => item.value === text).label}>
              <p className={styles.view}>View</p>
            </CsPopOver>
          );
        }
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record, index) => {
          return questions.options.status.find(item => item.value === text).label
        },
      },
      {
        title: 'Display',
        dataIndex: 'display',
        render: (text, record, index) => {
          return (
            <div className={text === 'published' ? styles.published : styles.draft}>
              <p>{questions.options.display.find(item => item.value === text).label}</p>
            </div>
          )
        },
      },
      {
        title: 'Action',
        render: (text, record, index) => {
          return (
            <CsPopOver placement="topLeft" trigger="click" content={<Menu />}>
              <CsIcon type="ellipsis" o />
            </CsPopOver>
          );
        }
      }
    ];

    return (
      <div className={styles.container}>
        <div className={styles.topRow}>
            <p className={styles.title}>Custom Question Manager</p>
            <CsButton type="default" icon="plus" onClick={() => {}}>Add Question</CsButton>
        </div>
        <div className={styles.filterPanel}>
          <CsRow type="flex" gutter={10}>
            <CsCol span={12}>
              <CsInput id="searchText" placeholder="Search by Question" onChange={this.onChangeFieldValue} />
            </CsCol>
            <CsCol span={6}>
              <CsSelect id="license" style={{ width: '100%' }} onChange={this.onChangeFieldValue} data={questions.options ? questions.options.license : []} placeholder="License"/>
            </CsCol>
            <CsCol span={6}>
              <CsSelect id="state" style={{ width: '100%' }} onChange={this.onChangeFieldValue} data={questions.options ? questions.options.states : []} placeholder="All States"/>
            </CsCol>
          </CsRow>
          <CsRow type="flex" gutter={10}>
            <CsCol span={6}>
              <CsSelect id="category" style={{ width: '100%' }} onChange={this.onChangeFieldValue} data={questions.options ? questions.options.categories : []} placeholder="All Categories"/>
            </CsCol>
            <CsCol span={6}>
              <CsInput id="questionGroup" placeholder="Search by Question Group (0)" onChange={this.onChangeFieldValue} />
            </CsCol>
            <CsCol span={5}>
              <CsSelect id="status" style={{ width: '100%' }} onChange={this.onChangeFieldValue} data={questions.options ? questions.options.status : []} placeholder="Status"/>
            </CsCol>
            <CsCol span={5}>
              <CsSelect id="display" style={{ width: '100%' }} onChange={this.onChangeFieldValue} data={questions.options ? questions.options.display : []} placeholder="Display"/>
            </CsCol>
            <CsCol span={2}>
              <CsButton style={{ width: '100%' }} disabled={!this.isSearchButtonEnabled()} onClick={this.onClickSearch} type="primary">Search</CsButton>
            </CsCol>
          </CsRow>
        </div>
        <CsTable
          className={styles.table}
          columns={columns}
          dataSource={questions.questionList}
          rowKey="id"
          pagination={{
            pageSize: 5,
            total: questions.questionList.length
          }}
          rowClassName={styles.row}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions
})

export default connect(mapStateToProps, { getQuestions, getSelectOptions, setSearchField })(QuestionsPage);