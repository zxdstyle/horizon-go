package consoles

import "github.com/spf13/cobra"

type Console struct {
	cmd *cobra.Command
}

func New(name string) *Console {
	return &Console{
		cmd: &cobra.Command{
			Use:   name,
			Short: "robot system command application",
			Run: func(cmd *cobra.Command, args []string) {
				if err := cmd.Help(); err != nil {
					panic(err)
				}
			},
		},
	}
}

func (c *Console) AddCommand(commands ...Command) {
	cmds := make([]*cobra.Command, 0)
	for _, command := range commands {
		cmds = append(cmds, &cobra.Command{
			Use:   command.Name(),
			Short: command.Description(),
			RunE: func(cmd *cobra.Command, args []string) error {
				return command.Execute(args...)
			},
		})
	}
	c.cmd.AddCommand(cmds...)
}

func (c *Console) Execute() error {
	return c.cmd.Execute()
}
